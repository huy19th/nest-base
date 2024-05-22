import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { Configuration } from './configuration.interface';
require('dotenv').config();

const env = process.env;

const config: Configuration = {
    port: +env.PORT || 8080,
};

export const configuration: ConfigFactory<Configuration> = () => config;