import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { EmailService } from './providers/email/email.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly emailsService: EmailService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('email')
  async sendEmail(
    @Body('message') message: string,
    @Body('to') to: string
  ) {
    this.emailsService.send({
      to,
      subject: 'test nodemailer',
      context: { message },
      template: 'test'
    });
    return 'ok';
  }
}
