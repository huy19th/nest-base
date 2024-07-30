import { Get, Post, Put, Delete, Body, Param, Controller } from '@nestjs/common';
import { BaseEntity } from 'typeorm';
import { BaseService } from './base.service';

@Controller()
export class BaseController
    <
        Entity extends BaseEntity,
        Service extends BaseService<Entity>,
        CreateEntityDto,
        UpdateEntityDto,
    > {

    protected readonly service: Service;

    constructor(service: Service) {
        this.service = service;
    }

    @Post()
    create(@Body() body: CreateEntityDto): Promise<Entity> {
        return this.service.create(body);
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Entity> {
        return this.service.findById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: UpdateEntityDto): Promise<Entity> {
        return this.service.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.service.delete(id);
    }

}