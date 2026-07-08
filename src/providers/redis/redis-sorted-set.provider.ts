import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

interface ZAddMember {
    score: number;
    value: any;
}

interface ZWithScore<T> {
    value: T | null;
    score: number;
}

@Injectable()
export class RedisSortedSetProvider {
    constructor(
        @Inject('REDIS_CLIENT')
        private readonly redis: RedisClientType
    ) { }

    private parse<T>(value: string | null): T | null {
        try {
            return value ? JSON.parse(value) : null;
        } catch (error) {
            return null;
        }
    }

    private stringify(value: any): string {
        return JSON.stringify(value);
    }

    async zadd(key: string, members: ZAddMember | ZAddMember[]) {
        const entries = Array.isArray(members) ? members : [members];
        return this.redis.zAdd(key, entries.map(({ score, value }) => ({
            score,
            value: this.stringify(value),
        })));
    }

    async zcard(key: string) {
        return this.redis.zCard(key);
    }

    async zcount(key: string, min = '-inf', max = '+inf') {
        return this.redis.zCount(key, min, max);
    }

    async zscore(key: string, member: any) {
        return this.redis.zScore(key, this.stringify(member));
    }

    async zrank(key: string, member: any) {
        return this.redis.zRank(key, this.stringify(member));
    }

    async zrevrank(key: string, member: any) {
        return this.redis.zRevRank(key, this.stringify(member));
    }

    async zincrby(key: string, increment: number, member: any) {
        return this.redis.zIncrBy(key, increment, this.stringify(member));
    }

    async zrem(key: string, members: any | any[]) {
        const client = this.redis as typeof this.redis & {
            zRem: (key: string, ...members: string[]) => Promise<number>;
        };

        if (Array.isArray(members)) {
            return client.zRem(key, ...members.map((member) => this.stringify(member)));
        }
        return client.zRem(key, this.stringify(members));
    }

    async zrange<T>(key: string, start = 0, stop = -1): Promise<Array<T | null>> {
        const values = await this.redis.zRange(key, start, stop);
        return values.map((value) => this.parse<T>(value));
    }

    async zrangeWithScores<T>(key: string, start = 0, stop = -1): Promise<Array<ZWithScore<T>>> {
        const items = await this.redis.zRangeWithScores(key, start, stop);
        return items.map(({ value, score }) => ({
            value: this.parse<T>(value),
            score,
        }));
    }

    async zrevrange<T>(key: string, start = 0, stop = -1): Promise<Array<T | null>> {
        const values = await this.redis.zRange(key, start, stop, { REV: true });
        return values.map((value) => this.parse<T>(value));
    }

    async zrangeByScore<T>(
        key: string,
        min = '-inf',
        max = '+inf',
        limit?: { offset: number; count: number }
    ): Promise<Array<T | null>> {
        const values = await this.redis.zRangeByScore(
            key,
            min,
            max,
            limit ? { LIMIT: { offset: limit.offset, count: limit.count } } : undefined,
        );
        return values.map((value) => this.parse<T>(value));
    }

    async zrangeByScoreWithScores<T>(
        key: string,
        min = '-inf',
        max = '+inf',
        limit?: { offset: number; count: number }
    ): Promise<Array<ZWithScore<T>>> {
        const items = await this.redis.zRangeByScoreWithScores(
            key,
            min,
            max,
            limit ? { LIMIT: { offset: limit.offset, count: limit.count } } : undefined,
        );
        return items.map(({ value, score }) => ({
            value: this.parse<T>(value),
            score,
        }));
    }

    async zrevrangeByScore<T>(
        key: string,
        max = '+inf',
        min = '-inf',
        limit?: { offset: number; count: number }
    ): Promise<Array<T | null>> {
        const args = ['ZREVRANGEBYSCORE', key, max, min];

        if (limit) {
            args.push('LIMIT', String(limit.offset), String(limit.count));
        }

        const values = (await this.redis.sendCommand(args)) as string[];
        return values.map((value) => this.parse<T>(value));
    }

    async zremrangeByScore(key: string, min = '-inf', max = '+inf') {
        return this.redis.zRemRangeByScore(key, min, max);
    }

    async zremrangeByRank(key: string, start = 0, stop = -1) {
        return this.redis.zRemRangeByRank(key, start, stop);
    }
}
