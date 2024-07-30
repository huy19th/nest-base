import { IsOptional, IsNumber } from 'class-validator';

export class PaginationDto {
    @IsOptional()
    @IsNumber()
    limit: number = 10;

    @IsOptional()
    @IsNumber()
    page: number = 1;
}