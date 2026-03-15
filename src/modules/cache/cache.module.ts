import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cache } from './cache.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Cache])
    ],
    controllers: [],
    providers: [],
    exports: []
})
export class CacheModule { }
