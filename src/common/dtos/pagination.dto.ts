import { Type } from '@nestjs/common';
import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';

@ArgsType()
export class PaginationOptions {
    @Field({ nullable: true, defaultValue: 1 })
    @IsNumber()
    @IsOptional()
    page: number = 1;

    @Field({ nullable: true, defaultValue: 10 })
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
    @ObjectType({ isAbstract: true })
    abstract class Paginated implements PaginatedType<T> {
        @Field(() => [_classRef], { nullable: true })
        items: T[];

        @Field()
        totalItems: number;

        @Field()
        totalPages: number;

        @Field()
        hasNextPage: boolean;

        @Field()
        hasPreviousPage: boolean;

        @Field()
        limit: number;

        @Field()
        page: number;
    }
    return Paginated as Type<PaginatedType<T>>;
}