import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { Configuration } from './configuration.interface';
require('dotenv').config();

const env = process.env;

const config: Configuration = {
    port: +env.PORT || 8080,
    mongo: {
        uri: process.env.MONGO_URI
    },
    redis: {
        url: process.env.REDIS_URL || 'redis://localhost:6379',
        username: process.env.REDIS_USERNAME || 'root',
        password: process.env.REDIS_PASSWORD || 'password',
    },
    security: {
        jwtSecret: process.env.JWT_SECRET || 'thereisnosecret',
        accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY || '7d',
        cacheExpiry: +(process.env.CACHE_EXPIRY || 7 * 24 * 60 * 60 * 1000)
    },
};

export const configuration: ConfigFactory<Configuration> = () => config;