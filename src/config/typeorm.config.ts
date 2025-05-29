import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Config } from '.';
import { User } from '../modules/user/user.entity';
import { Artist } from '../modules/artist/artist.entity';
import { Song } from '../modules/song/song.entity';

@Injectable()
export class TypeormConfig implements TypeOrmOptionsFactory {
    constructor(private config: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        const pg = this.config.get<Config['pg']>('pg')
        return {
            type: 'postgres',
            entities: [
                User,
                Artist,
                Song,
            ],
            migrations: ['dist/migrations/*.js'],
            synchronize: false,
            ...pg
        }
    }
}