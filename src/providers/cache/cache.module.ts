import { Module } from '@nestjs/common';
import { CacheModule as CacheManager } from '@nestjs/cache-manager';
import { RedisConfigService } from 'src/config/redis.config';
import { ConfigModule } from '@nestjs/config';
import { CacheProvider } from './cache.provider';

@Module({
    imports: [CacheManager.registerAsync({ useClass: RedisConfigService, imports: [ConfigModule] })],
    providers: [CacheProvider],
    exports: [CacheProvider],
})
export class CacheModule { }