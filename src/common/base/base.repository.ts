import { BaseEntity } from './base.entity';

export class BaseRepository<T extends BaseEntity> {

  constructor(protected readonly repository: any) {}

  findAll(): Promise<T[]> {
  }

  findById(id: string): Promise<T> {
  }

  findByIds(ids: string[]): Promise<T[]> {
  }

  create(data: Partial<T> | Partial<T>[]): Promise<T> {
  }

  update(id: string, data: any): Promise<any> {
  }

  delete(id: string): Promise<any> {
    return this.repository.delete(id);
  }

  // upsert(id: string, data: Partial<T>): Promise<any> {
  // }

  // offset(options: any): Promise<[T[], number]> {
  // }

  // cusor(options: any): Promise<any> {
  // }

}