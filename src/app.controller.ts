import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { EmailService } from './providers/email/email.service';

@Controller()
export class AppController {
  constructor(private emailsService: EmailService) { }

  @Get()
  getHello(): string {
    return "Hello World!";
  }

  @Post()
  sendEmail(
    @Body('message') message: string,
    @Body('to') to: string
  ) {
    this.emailsService.send({
      to,
      subject: 'test nodemailer',
      context: { message }
    });
    return 'ok';
  }
}
