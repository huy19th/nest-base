import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { documentConfig, documentOptions, setupOptions } from './config/swagger.config';
import { Environment } from './config';
import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);
  const port = config.get('server.port');
  app.enableCors();
  app.useBodyParser('json', { limit: '10mb' });
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));
  const env = config.get('server.node_env');
  if (env !== Environment.Production) {
    const document = SwaggerModule.createDocument(app, documentConfig, documentOptions);
    SwaggerModule.setup('api', app, document, setupOptions);
    writeFileSync('./swagger.json', JSON.stringify(document, null, 2)); // generate swagger.json to import to postman if needed
  }
  await app.listen(port);
}
bootstrap();
