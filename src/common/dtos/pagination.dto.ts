import { Type } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class PaginationOptions {
    @IsNumber()
    @IsOptional()
    page: number = 1;

    @IsNumber()
    @IsOptional()
    limit: number = 10;
}

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
        @ApiProperty({ isArray: true, type: _classRef })
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