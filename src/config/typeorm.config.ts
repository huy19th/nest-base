import { Artist } from '../modules/artist/artist.entity';
import { Song } from '../modules/song/song.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
require('dotenv').config();

const env = process.env;

export const typeOrmConfig: DataSourceOptions = {
    type: 'postgres',
    host: env.POSTGRES_HOST || 'localhost',
    port: +env.POSTGRES_PORT || 1001,
    username: env.POSTGRES_USERNAME || 'nest-base',
    password: env.POSTGRES_PASSWORD || 'nest-base',
    database: env.POSTGRES_DATABASE || 'nest-base',
    entities: [Artist, Song],
    migrations: ['dist/migrations/*.js'],
    synchronize: false,
    logging: true,
}

const dataSource = new DataSource({...typeOrmConfig, migrations: ['src/migrations/*.ts']});

export default dataSource;