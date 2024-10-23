import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { configSchema } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      load: [configuration],
      validationSchema: configSchema,
      envFilePath: ['.env.development', '.env.production'],
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
