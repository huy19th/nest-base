import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './config';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose'
import { MongooseConfig } from './config/mongoose.config';
import { SongModule } from './modules/song/song.module';
import { ArtistModule } from './modules/artist/artist.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    MongooseModule.forRootAsync({ useClass: MongooseConfig }),
    ArtistModule,
    SongModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(@InjectConnection() private readonly connection: Connection) { }

  async onModuleInit() {
    await this.syncIndexes();
  }

  private async syncIndexes() {
    const models = this.connection.models;

    for (const modelName of Object.keys(models)) {
      const model = models[modelName];
      const result = await model.syncIndexes();
      console.log(`Indexes synced for ${modelName}:`, result);
    }
  }
}
