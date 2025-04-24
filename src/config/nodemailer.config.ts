import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { join } from 'path';
import { Config } from '.';

@Injectable()
export class NodemailerConfigService implements MailerOptionsFactory {

    constructor(private config: ConfigService) { }

    createMailerOptions(): MailerOptions | Promise<MailerOptions> {
        const { user, pass, host, port } = this.config.get<Config['mailer']>(('mailer'));
        
        return {
            transport: {
                host,
                port,
                auth: {
                    user,
                    pass,
                },
            },
            defaults: {
                from: user,
            },
            template: {
                dir: join(process.cwd(), 'src/providers/email/templates'),
                adapter: new EjsAdapter({ inlineCssEnabled: true }),
                options: {
                    strict: false,
                },
            }
        }
    }
}