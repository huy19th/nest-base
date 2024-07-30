import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
    HttpException,
    InternalServerErrorException
} from '@nestjs/common';
import { Request } from 'express';
import { GqlExecutionContext, GqlContextType } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IPaginatedType } from '../common/types/paginated.type';

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        let limit: number, page: number;
        if (context.getType<GqlContextType>() === 'graphql') {
            const gqlContext = GqlExecutionContext.create(context);
            const args = gqlContext.getArgs<{ limit: number, page: number }>();
            limit = args.limit;
            page = args.page;
        }
        else if (context.getType() === 'http') {
            const req = context.switchToHttp().getRequest<Request>();
            limit = +req.query.limit || 10;
            page = +req.query.page || 1;
        }
        return next.handle().pipe(
            map((data: [any[], number]): IPaginatedType<any> => {
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