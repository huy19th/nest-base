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
  @IsPort()
  REDIS_PORT: string = '1003';

  @IsOptional()
  @IsString()
  REDIS_HOST: string = 'localhost';

  @IsOptional()
  @IsString()
  REDIS_BULLMQ_KEY_PREFIX: string = 'BullMQ';
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
    bullmq: {
      host: env.REDIS_HOST,
      port: env.REDIS_PORT,
      key_prefix: env.REDIS_BULLMQ_KEY_PREFIX,
    },
  };
}

export type Config = ReturnType<typeof validate>;

export const configOptions: ConfigModuleOptions = {
  isGlobal: true,
  cache: true,
  validate,
  //   envFilePath: ['.env.dev.local'] // read .env by default
};
