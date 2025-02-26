import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { WinstonConfig } from './config/winston.config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    { logger: WinstonModule.createLogger(WinstonConfig) }
  );
  app.enableCors();
  app.useBodyParser('json', { limit: '10mb' });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(1000);
}
bootstrap();
