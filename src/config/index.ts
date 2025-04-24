import { plainToInstance } from 'class-transformer';
import {
  IsEnum,
  IsPort,
  validateSync,
  IsOptional,
  IsEmail,
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

  @IsEmail()
  NODEMAILER_USER: string;

  @IsString()
  NODEMAILER_PASS: string;

  @IsString()
  NODEMAILER_HOST: string;

  @IsPort()
  NODE_MAILER_PORT: string;
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
    mailer: {
      user: env.NODEMAILER_USER,
      pass: env.NODEMAILER_PASS,
      host: env.NODEMAILER_HOST,
      port: env.NODE_MAILER_PORT
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
