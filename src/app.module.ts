import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { DataSource } from 'typeorm';
import { ArtistModule } from './modules/artist/artist.module';
import { SongModule } from './modules/song/song.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    TypeOrmModule.forRoot(typeOrmConfig),
    ArtistModule,
    SongModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly dataSource: DataSource,
  ) { }

  async onModuleInit() {
    if (await this.dataSource.showMigrations()) {
      console.log('Running migrations');
      await this.dataSource.runMigrations();
      console.log('Migrations complete');
    }
  }
}
