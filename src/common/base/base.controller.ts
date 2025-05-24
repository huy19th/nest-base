import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { BaseService } from './base.service';

/**
 * make swagger plugin works incorrectly:
 * - unable to generate api response type
 * - unable to generate api query
 */
export class BaseController<T extends BaseEntity> {
    constructor(private readonly service: BaseService<T>) { }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.service.findById(id);
    }

    @Post()
    create(@Body() body: Partial<T>) {
        return this.service.create(body);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() body: Partial<T>
    ) {
        return this.service.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}