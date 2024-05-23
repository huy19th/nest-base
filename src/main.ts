import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TimeExeInterceptor } from './interceptors';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  app.enableCors();
  app.useBodyParser('json', { limit: '10mb' });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TimeExeInterceptor());
  await app.listen(port);
}
bootstrap();