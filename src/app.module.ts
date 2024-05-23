import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { EmailModule } from './providers/email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    EmailModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
