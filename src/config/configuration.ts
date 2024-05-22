import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { Configuration } from './configuration.interface';
require('dotenv').config();

const env = process.env;

const config: Configuration = {
    port: +env.PORT || 8080,
    mongo: {
        uri: process.env.MONGO_URI
    },
};

export const configuration: ConfigFactory<Configuration> = () => config;