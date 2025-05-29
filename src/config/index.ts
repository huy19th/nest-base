import { plainToInstance } from 'class-transformer';
import {
  IsEnum,
  IsPort,
  validateSync,
  IsOptional,
  IsString,
} from 'class-validator';
import { ConfigModuleOptions } from '@nestjs/config';

export enum Environment {
  Development = 'development',
  Staging = 'staging',
  Production = 'production',
  Test = 'test',
}

class EnvironmentVariables {
  @IsOptional()
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsOptional()
  @IsPort()
  PORT: string = '1000';

  @IsOptional()
  @IsString()
  PG_HOST: string = 'localhost';

  @IsOptional()
  @IsPort()
  PG_PORT: string = '1001';

  @IsOptional()
  @IsString()
  PG_DATABASE: string = 'postgres';

  @IsOptional()
  @IsString()
  PG_USERNAME: string = 'nest-base';

  @IsOptional()
  @IsString()
  PG_PASSWORD: string = 'nest-base';

  @IsOptional()
  @IsString()
  PG_LOGGING: string = 'true';
}

function validate(config: Record<string, unknown>) {
  const env = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(env, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return {
    server: {
      port: env.PORT,
      node_env: env.NODE_ENV,
    },
    pg: {
      host: env.PG_HOST,
      port: +env.PG_PORT,
      database: env.PG_DATABASE,
      username: env.PG_USERNAME,
      password: env.PG_PASSWORD,
      logging: env.PG_LOGGING === 'true'
    }
  };
}

export type Config = ReturnType<typeof validate>;

export const configOptions: ConfigModuleOptions = {
  isGlobal: true,
  cache: true,
  validate,
  //   envFilePath: ['.env.dev.local'] // read .env by default
};
