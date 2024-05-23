import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { ThrottlerConfigService } from './config/throttler.config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    ThrottlerModule.forRootAsync({ useClass: ThrottlerConfigService, imports: [ConfigModule] }),
  ],
  controllers: [AppController],
  providers: [
    // { provide: APP_GUARD, useClass: ThrottlerGuard }, // bind throttle global scope
  ],
})
export class AppModule { }
