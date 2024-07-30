import { Type } from '@nestjs/common';

export interface IPaginatedType<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  limit: number;
  page: number;
}

export function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>> {
  abstract class PaginatedType implements IPaginatedType<T> {
    items: T[];

    totalItems: number;

    totalPages: number;

    hasNextPage: boolean;

    hasPreviousPage: boolean;

    limit: number;

    page: number;
  }
  return PaginatedType as Type<IPaginatedType<T>>;
}
