import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './config';
import { SlackModule } from './modules/slack/slack.module';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    SlackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
