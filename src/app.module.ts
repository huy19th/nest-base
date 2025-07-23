import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './config';
import { BullModule } from '@nestjs/bullmq';
import { BullConfig } from './config/bull.config';
import { AudioModule } from './modules/audio/audio.module';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    BullModule.forRootAsync({ useClass: BullConfig }),
    AudioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
