import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm.config';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
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
