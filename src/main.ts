import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { WinstonConfig } from './config/winston.config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    { logger: WinstonModule.createLogger(WinstonConfig) }
  );
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  app.enableCors();
  app.useBodyParser('json', { limit: '10mb' });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();