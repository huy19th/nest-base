import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CacheOptionsFactory, CacheModuleOptions } from '@nestjs/cache-manager';
import type { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-yet';
import { Config } from '.';


@Injectable()
export class RedisConfigService implements CacheOptionsFactory {

    constructor(private config: ConfigService) { }

    async createCacheOptions(): Promise<CacheModuleOptions<RedisClientOptions>> {   
        return { stores: await redisStore(this.config.get<Config['redis']>('redis')) };
    }

}