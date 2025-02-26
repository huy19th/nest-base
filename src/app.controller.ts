import {
  Controller,
  Get,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentUser } from './modules/user/user.decorator';
import { User } from './modules/user/user.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@CurrentUser() user: User): string {
    console.log(user);
    return this.appService.getHello();
  }
}
