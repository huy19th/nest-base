import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongoose.config';
import { CacheModule } from './providers/cache/cache.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    MongooseModule.forRootAsync({ useClass: MongooseConfigService, imports: [ConfigModule] }),
    CacheModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
