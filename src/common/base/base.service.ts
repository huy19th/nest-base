import {
    BaseEntity,
    DeleteResult,
    Repository,
    FindManyOptions,
} from 'typeorm';
import { EntityId } from 'typeorm/repository/EntityId';

export class BaseService<T extends BaseEntity> {
    protected readonly repository: Repository<T>

    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    findAll(): Promise<T[]> {
        return this.repository.find();
    }

    findById(id: string): Promise<T> {
        return this.repository.findOneById(id);
    }

    findByIds(ids: [EntityId]): Promise<T[]> {
        return this.repository.findByIds(ids);
    }

    create(data: any): Promise<T> {
        return this.repository.save(data);
    }

    insert(data: any) {
        return this.repository.insert(data);
    }

    update(id: EntityId, data: any): Promise<T> {
        return this.repository.save({ id, ...data });
    }

    delete(id: EntityId): Promise<DeleteResult> {
        return this.repository.delete(id);
    }

    paginate(page: number, limit: number) {
        return this.repository.findAndCount({ skip: (page - 1) * limit, take: limit });
    }

    findOneDynamicSelect(
        where: FindManyOptions<T>['where'],
        select: FindManyOptions<T>['select']
    ) {
        select = fieldMapToSelect(select);
        return this.repository.findOne({ where, select, loadEagerRelations: true })
    }

    findManyDynamicSelect(
        where: FindManyOptions<T>['where'],
        select: FindManyOptions<T>['select'],
        take: number,
        page: number
    ) {
        select = fieldMapToSelect(select);
        return this.repository.find({ where, select, take, skip: take * (page - 1), loadEagerRelations: true  });
    }
}

function fieldMapToSelect(fieldMap: Record<string, any>): Record<string, any | boolean> {
    let select = {};
    for (let field in fieldMap) {
        if (typeof field != 'string') break;
        if (Object.keys(fieldMap[field]).length == 0) {
            select[field] = true;
        }
        else {
            select[field] = fieldMapToSelect(fieldMap[field]);
        }
    }
    return select;
}
