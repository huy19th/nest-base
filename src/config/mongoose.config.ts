import { Injectable } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Config } from '.';

@Injectable()
export class MongooseConfig implements MongooseOptionsFactory {

    constructor(private configService: ConfigService) { }

    createMongooseOptions(): MongooseModuleOptions {
        return this.configService.get('mongo') as Config['mongo'];
    }

}