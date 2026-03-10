import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisStringProvider {
    constructor(
        @Inject('REDIS_CLIENT')
        private readonly redis: RedisClientType
    ) { }

    private parse<T>(value: string | null): T | null {
        try {
            const parsed = value ? JSON.parse(value) : null;
            return parsed;
        } catch (error) {
            return null;
        }
    }

    async get<T>(key: string): Promise<T | null> {
        const value = await this.redis.get(key);
        return this.parse<T>(value);
    }

    /**
     * @param ttl in seconds
     */
    async set(key: string, value: any, ttl?: number): Promise<string | null> {
        const stringValue = JSON.stringify(value);
        if (ttl) {
            return this.redis.setEx(key, ttl, stringValue);
        }
        return this.redis.set(key, stringValue);
    }

    async del(key: string): Promise<number> {
        return this.redis.del(key);
    }

    // get multiple keys in batch
    async mget<T>(keys: string[], batchSize: number = 500): Promise<(T | null)[]> {
        const values: Array<T | null> = [];
        for (let i = 0, n = keys.length; i < n; i += batchSize) {
            const batch = await this.redis.mGet(keys.slice(i, i + batchSize));
            values.push(...batch.map((value) => this.parse<T>(value)));
        }
        return values;
    }

    // set multiple keys in batch
    async mset(keys: string[], data: any[], batchSize: number = 500, ttl?: number) {
        for (let i = 0, n = keys.length; i < n; i += batchSize) {
            const batch = keys.slice(i, i + batchSize);
            const batchData = data.slice(i, i + batchSize);

            await this.redis.mSetEx(Object.fromEntries(
                batch.map((key, index) => [key, JSON.stringify(batchData[index])])
            ), ttl ? { expiration: { type: 'EX', value: ttl } } : {});

        }
    }

    // append string to the value of a key
    async append(key: string, value: string): Promise<number> {
        return this.redis.append(key, value);
    }

    // decrement the value of a key by 1
    async decr(key: string, value: number = 1): Promise<number> {
        return this.redis.decrBy(key, value);
    }

    // increment the value of a key by 1
    async incr(key: string, value: number = 1): Promise<number> {
        return this.redis.incrBy(key, value);
    }

}
