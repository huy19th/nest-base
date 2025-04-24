import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport, Transporter } from 'nodemailer';
import { renderFile } from 'ejs';
import { join } from 'path';
import { Config } from '../../config';
import { Options } from 'nodemailer/lib/mailer';
import * as inlineCss from 'inline-css'

@Injectable()
export class EmailService {

    private readonly logger = new Logger(EmailService.name);
    transport: Transporter

    constructor(private readonly config: ConfigService) {
        const { user, pass, host, port } = this.config.get<Config['mailer']>('mailer');
        this.transport = createTransport({
            host,
            // port,
            auth: {
                user,
                pass
            }
        })
    }

    async send(options: Options, template?: string, context?: Record<string, any>) {
        if (template && context) {
            const templatePath = join(process.cwd(), `src/providers/email/templates/${template}.ejs`)
            options.html = (await renderFile(templatePath, context)) as string;
            options.html = await inlineCss(options.html, { url: ' ' });
        }
        // uncomment the following block if space is randomly added to mail subject
        // if (options.subject) {
        //     options.subject = `=?UTF-8?B?${Buffer.from(options.subject, 'utf-8').toString('base64')}?=`
        // }
        this.transport.sendMail(options)
    }
}