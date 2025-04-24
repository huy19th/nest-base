import { Injectable, Logger } from '@nestjs/common';
import { MailerService, ISendMailOptions } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {

    private readonly logger = new Logger(EmailService.name);

    constructor(private readonly mailerService: MailerService) { }

    send(options: ISendMailOptions) {
        this.logger.log(options)
        // uncomment the following block if space is randomly added to mail subject
        // if (options.subject) {
        //     options.subject = `=?UTF-8?B?${Buffer.from(options.subject, 'utf-8').toString('base64')}?=`
        // }
        this.mailerService.sendMail(options)
            .then(() => { })
            .catch((err) => console.log(err));
    }
}