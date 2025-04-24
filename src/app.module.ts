import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './config';
import { EmailModule } from './providers/email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
