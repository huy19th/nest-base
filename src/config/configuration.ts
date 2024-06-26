import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { Configuration } from './configuration.interface';
require('dotenv').config();

const env = process.env;

const config: Configuration = {
    port: +env.PORT || 8080,
    sms: {
        apiKey: env.SMS_API_KEY,
        url: env.SMS_API_URL,
        from: env.SMS_FROM
    }
};

export const configuration: ConfigFactory<Configuration> = () => config;