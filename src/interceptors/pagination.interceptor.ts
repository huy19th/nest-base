import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
    HttpException,
    InternalServerErrorException
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Type } from '@nestjs/common';

export interface PaginatedType<T> {
    items: T[];
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    limit: number;
    page: number;
}

export function Paginated<T>(_classRef: Type<T>): Type<PaginatedType<T>> {
    abstract class Paginated implements PaginatedType<T> {
        items: T[];

        totalItems: number;

        totalPages: number;

        hasNextPage: boolean;

        hasPreviousPage: boolean;

        limit: number;

        page: number;
    }
    return Paginated as Type<PaginatedType<T>>;
}

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        let limit: number, page: number;
        if (context.getType() === 'http') {
            const req = context.switchToHttp().getRequest<Request>();
            limit = +req.query.limit || 10;
            page = +req.query.page || 1;
        }
        return next.handle().pipe(
            map((data: [any[], number]): PaginatedType<any> => {
                const [items, totalItems] = data;
                const totalPages = Math.ceil(totalItems / limit);
                const hasNextPage = page < totalPages;
                const hasPreviousPage = page > 1 && page < totalPages;

                return { items, totalItems, totalPages, hasNextPage, hasPreviousPage, limit, page };
            }),
            catchError((err) => {
                if (err instanceof HttpException) {
                    // Convert to a standard error format
                    throw err;
                }
                else {
                    throw new InternalServerErrorException(err.message);
                }
            }),
        );
    }
}