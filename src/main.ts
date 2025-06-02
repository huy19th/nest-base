import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { UltimateExpressAdapter } from './common/adapters/ultimate-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new UltimateExpressAdapter());
  app.enableCors();
  app.useBodyParser('json', { limit: '10mb' });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(1000);
}
bootstrap();
