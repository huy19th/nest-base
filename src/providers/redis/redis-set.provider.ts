import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisSetProvider {
    constructor(
        @Inject('REDIS_CLIENT')
        private readonly redis: RedisClientType
    ) { }

    sadd(key: string, value: any) {
        if (Array.isArray(value)) {
            return this.redis.sAdd(key, value.map((v) => JSON.stringify(v)));
        }
        return this.redis.sAdd(key, JSON.stringify(value));
    }

    len(key: string) {
        return this.redis.sCard(key);
    }

    smembers(key: string) {
        return this.redis.sMembers(key);
    }

    srandmember(key: string) {
        return this.redis.sRandMember(key);
    }

    sismember(key: string, value: any) {
        return this.redis.sIsMember(key, JSON.stringify(value));
    }

    srem(key: string, value: any) {
        if (Array.isArray(value)) {
            return this.redis.sRem(key, value.map((v) => JSON.stringify(v)));
        }
        return this.redis.sRem(key, JSON.stringify(value));
    }

    sinter(keys: string[]) {
        return this.redis.sInter(keys);
    }
}
