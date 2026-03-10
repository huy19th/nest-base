import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisListProvider {
    constructor(
        @Inject('REDIS_CLIENT')
        private readonly redis: RedisClientType
    ) { }

    lpush(key: string, value: any) {
        return this.redis.lPush(key, JSON.stringify(value));
    }

    linsert(key: string, pivot: any, value: any) {
        return this.redis.lInsert(key, 'BEFORE', JSON.stringify(pivot), JSON.stringify(value));
    }

    rpop(key: string, block = false, timeout = 1000) {
        if (block) {
            return this.redis.brPop(key, timeout);
        }
        return this.redis.rPop(key);
    }

    lpop(key: string, block = false, timeout = 1000) {
        if (block) {
            return this.redis.blPop(key, timeout);
        }
        return this.redis.lPop(key);
    }

    len(key: string) {
        return this.redis.lLen(key);
    }
}
