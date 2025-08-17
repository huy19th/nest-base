import { BaseEntity } from './base.entity';
import { Model, HydratedDocument, RootFilterQuery } from 'mongoose';

export class BaseRepository<T extends BaseEntity> {
  private model: Model<T>

  constructor(model: Model<T>) {
    this.model = model;
  }

  findAll(selectFields?: string[]): Promise<HydratedDocument<T>[]> {
    return this.model.find({}, selectFields);
  }

  findById(id: string, selectFields?: string[]): Promise<HydratedDocument<T> | null> {
    return this.model.findById(id, selectFields);
  }

  findByIds(ids: string[], selectFields?: string[]): Promise<HydratedDocument<T>[]> {
    return this.model.find({ id: { $in: ids } }, selectFields);
  }

  create(data: Partial<T> | Partial<T>[]): Promise<HydratedDocument<T> | HydratedDocument<T>[]> {
    return this.model.create(data);
  }

  upsert(filter: RootFilterQuery<T>, data: Partial<T>): Promise<HydratedDocument<T> | null> {
    return this.model.findOneAndUpdate(filter, data, { upsert: true })
  }

  update(id: string, data: Partial<T>): Promise<HydratedDocument<T> | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<HydratedDocument<T> | null> {
    return this.model.findByIdAndDelete(id)
  }

  // upsert(id: string, data: Partial<T>): Promise<any> {
  // }

  // offset(options: any): Promise<[T[], number]> {
  // }

  // cusor(options: any): Promise<any> {
  // }

}