import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisHashProvider {
    constructor(
        @Inject('REDIS_CLIENT')
        private readonly redis: RedisClientType
    ) { }

    // set value of fields in hash
    hset(key: string, value: Record<string, any>, ttl?: number) {
        const cacheValue = Object.fromEntries(
            Object.entries(value).map(([key, value]) => [key, JSON.stringify(value)])
        );
        if (ttl) {
            this.redis.hSetEx(key, cacheValue, { expiration: { type: 'EX', value: ttl } });
        } else {
            this.redis.hSet(key, cacheValue);
        }
    }

    // get value of fields in hash, if no field is provided, return all values
    hget(key: string, field?: string | string[]) {
        if (!field) {
            return this.redis.hVals(key);
        }
        const fields = Array.isArray(field) ? field : [field];
        return this.redis.hmGet(key, fields);
    }

    // delete field(s) in hash, if no field is provided, delete the whole hash
    hdel(key: string, field?: string | string[]) {
        if (!field) {
            return this.redis.del(key);
        }
        const fields = Array.isArray(field) ? field : [field];
        return this.redis.hDel(key, fields);
    }
}
