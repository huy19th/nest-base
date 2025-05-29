import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeormConfig } from './typeorm.config';
import { ConfigService } from '@nestjs/config';
import { configOptions } from '.';
import { config } from 'dotenv';
config();

//@ts-ignore
const configService = new ConfigService(configOptions.validate(process.env)); // Manually load config
const typeOrmConfig = new TypeormConfig(configService).createTypeOrmOptions() as DataSourceOptions; // Get TypeORM options

const dataSource = new DataSource({
    ...typeOrmConfig,
    migrations: ['src/migrations/*.ts'],
});

export default dataSource;