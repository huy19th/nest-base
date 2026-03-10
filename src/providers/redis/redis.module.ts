import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createClient } from 'redis';

@Module({
    imports: [ConfigModule],
    providers: [
        {
            provide: 'REDIS_CLIENT',
            useFactory: (config: ConfigService) => createClient({
                url: `redis://${config.get('redis.host')}:${config.get('redis.port')}`,
            }),
            inject: [ConfigService],
        }
    ],
    exports: [],
})
export class RedisModule { }
