import { FindManyOptions } from 'typeorm';
import { BaseEntity } from './base.entity';
import { BaseRepository } from './base.repository';

export class BaseService<T extends BaseEntity> {
    constructor(private readonly repository: BaseRepository<T>) { }

    findAll() {
        return this.repository.findAll();
    }

    findById(id: string) {
        return this.repository.findById(id);
    }

    findByIds(ids: string[]) {
        return this.repository.findByIds(ids);
    }

    create(data: Partial<T>) {
        return this.repository.create(data);
    }

    update(id: string, data: Partial<T>) {
        return this.repository.update(id, data)
    }

    delete(id: string) {
        return this.repository.delete(id)
    }


    findOneDynamicSelect(
        where: FindManyOptions<T>['where'],
        select: FindManyOptions<T>['select']
    ) {
        return this.repository.findOneDynamicSelect(where, select)
    }

    findManyDynamicSelect(
        where: FindManyOptions<T>['where'],
        select: FindManyOptions<T>['select'],
        take: number,
        page: number
    ) {
        return this.repository.findManyDynamicSelect(where, select, take, page)
    }
}