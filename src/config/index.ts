import { plainToInstance } from 'class-transformer';
import {
  IsEnum,
  IsPort,
  validateSync,
  IsOptional,
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
  };
}

export type Config = ReturnType<typeof validate>;

export const configOptions: ConfigModuleOptions = {
  isGlobal: true,
  cache: true,
  validate,
  //   envFilePath: ['.env.dev.local'] // read .env by default
};
