import {
  DeleteResult,
  Repository,
  In,
  FindOptionsWhere,
  FindManyOptions,
} from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';
import { BaseEntity } from './base.entity';
import { NotFoundException } from '@nestjs/common';

export class BaseRepository<T extends BaseEntity> {

  constructor(protected readonly repository: Repository<T>) { }

  findAll(): Promise<T[]> {
    return this.repository.find()
  }

  findById(id: EntityId): Promise<T | null> {
    return this.repository.findOneBy({ id } as FindOptionsWhere<T>)
  }

  findByIds(ids: EntityId[]): Promise<T[]> {
    return this.repository.findBy({ id: In(ids) } as FindOptionsWhere<T>)
  }

  create(data: Partial<T> | Partial<T>[]): Promise<T> {
    return this.repository.save(data as T)
  }

  async update(id: EntityId, data: Partial<T>): Promise<T> {
    const entity = await this.findById(id)
    if (!entity) throw new NotFoundException()
    Object.assign(entity, data)
    return entity.save()
  }

  delete(id: EntityId): Promise<DeleteResult> {
    return this.repository.delete(id);
  }

  // upsert(id: string, data: Partial<T>): Promise<any> {
  // }

  // offset(options: any): Promise<[T[], number]> {
  // }

  // cusor(options: any): Promise<any> {
  // }

  findOneDynamicSelect(
    where: FindManyOptions<T>['where'],
    select: FindManyOptions<T>['select']
  ) {
    return this.repository.findOne({ where, select, loadEagerRelations: true })
  }

  findManyDynamicSelect(
    where: FindManyOptions<T>['where'],
    select: FindManyOptions<T>['select'],
    take: number,
    page: number
  ) {
    return this.repository.find({ where, select, take, skip: take * (page - 1), loadEagerRelations: true });
  }
}