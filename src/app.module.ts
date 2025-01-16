import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { UploadModule } from './modules/upload/upload.module';
import { esmModules } from './common';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    UploadModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {
    await esmModules.load();
  }
}
