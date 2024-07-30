import { IsOptional, IsNumber } from 'class-validator';
import { Field, Int, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class PaginationDto {
    @Field(
        type => Int,
        { nullable: true, defaultValue: 10 }
    )
    @IsOptional()
    @IsNumber()
    limit: number = 10;

    @Field(
        type => Int,
        { nullable: true, defaultValue: 1 }
    )
    @IsOptional()
    @IsNumber()
    page: number = 1;
}