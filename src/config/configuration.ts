import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { Configuration } from './configuration.interface';
import * as Joi from 'joi';
require('dotenv').config();

const env = process.env;

export const configSchema = Joi.object({
    NODE_ENV: Joi.string(),
    PORT: Joi.number().port().default(3000)
});

// if custon config is not specified, configService.get cant pass ENV variables instead of config key
const config: Configuration = {
    port: +env.PORT,
};

export const configuration: ConfigFactory<Configuration> = () => config;