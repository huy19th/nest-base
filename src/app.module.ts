import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './config';
import { SongModule } from './modules/song/song.module';
import { ArtistModule } from './modules/artist/artist.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from './config/typeorm.config';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    TypeOrmModule.forRootAsync({ useClass: TypeormConfig }),
    ArtistModule,
    SongModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name)

  constructor(
    private readonly dataSource: DataSource,
  ) { }

  async onModuleInit() {
    const hasMigrations = await this.dataSource.showMigrations();
    if (!hasMigrations) return;
    this.logger.log('==========Running migrations==========');
    await this.dataSource.runMigrations();
    this.logger.log('==========Migrations complete==========');
  }
}
