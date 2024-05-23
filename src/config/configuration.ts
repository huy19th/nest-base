import { ConfigFactory } from '@nestjs/config/dist/interfaces';
import { Configuration } from './configuration.interface';
require('dotenv').config();

const env = process.env;

const config: Configuration = {
    port: +env.PORT || 8080,
    nodemailer: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
        host: process.env.NODEMAILER_HOST,
        port: +process.env.NODEMAILER_PORT
    },
};

export const configuration: ConfigFactory<Configuration> = () => config;