import { Type } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export interface IPaginatedType<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  limit: number;
  page: number;
}

export function Paginated(resultType: unknown): any {
  abstract class PaginatedType {
    @ApiProperty({isArray: true, type: resultType})
    items: unknown[];

    totalItems: number;

    totalPages: number;

    hasNextPage: boolean;

    hasPreviousPage: boolean;

    limit: number;

    page: number;
  }
  return PaginatedType;
}
