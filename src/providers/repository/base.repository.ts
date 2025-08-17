import { Model, HydratedDocument, RootFilterQuery } from 'mongoose';

type BaseRepoType<T> = {
  findAll(): Promise<any[]>;
  findById(id: string, selectFields?: string[]): Promise<any>;
  findByIds(ids: string[], selectFields?: string[]): Promise<any[]>;
  create(data: Partial<T>): Promise<any>;
  upsert(id: any, data: Partial<T>): Promise<any>; // return updated data or boolean
  update(id: any, data: Partial<T>): Promise<any>; // return updated data or boolean
  delete(id: any): Promise<any>; // return deleted data or boolean
  softDelete?(id: any): Promise<boolean>;
  offset?(options: any): Promise<[any[], number]>;
  cursor?(options: any): Promise<any>;
}

export class BaseRepository<T> implements BaseRepoType<T> {
  private model: Model<T>

  constructor(model: Model<T>) {
    this.model = model;
  }

  findAll(selectFields?: string[]): Promise<HydratedDocument<T>[]> {
    return this.model.find({}, selectFields);
  }

  findById(id: string, selectFields?: string[]): Promise<HydratedDocument<T>> {
    return this.model.findById(id, selectFields) as Promise<HydratedDocument<T>>;
  }

  findByIds(ids: string[], selectFields?: string[]): Promise<HydratedDocument<T>[]> {
    return this.model.find({ id: { $in: ids } }, selectFields);
  }

  create(data: Partial<T> | Partial<T>[]): Promise<HydratedDocument<T> | HydratedDocument<T>[]> {
    return this.model.create(data);
  }

  upsert(filter: RootFilterQuery<T>, data: Partial<T>): Promise<HydratedDocument<T>> {
    return this.model.findOneAndUpdate(filter, data, { upsert: true }) as  Promise<HydratedDocument<T>>
  }

  update(id: string, data: Partial<T>): Promise<HydratedDocument<T>> {
    return this.model.findByIdAndUpdate(id, data, { new: true }) as Promise<HydratedDocument<T>>;
  }

  async delete(id: string): Promise<HydratedDocument<T>> {
    return this.model.findByIdAndDelete(id) as Promise<HydratedDocument<T>>
  }

}