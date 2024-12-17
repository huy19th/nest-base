import * as Joi from 'joi';
import { ConfigModuleOptions } from '@nestjs/config';

export const configOptions: ConfigModuleOptions = {
    cache: true,
    isGlobal: true,
    validationSchema: Joi.object({
        NODE_ENV: Joi.string()
            .valid('development', 'production', 'test', 'provision')
            .default('development'),
        PORT: Joi.number().port().default(8080),
        // POSTGRES CONNECTION STRING FORMAT: postgresql://<username>:<password>@<host>:<port>/<database_name>
        DB_URL: Joi.string().default('postgresql://postgres:postgres@localhost:1003/postgres')
    }),
    validationOptions: {
        allowUnknown: true,
    },
}