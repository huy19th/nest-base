import {
  Controller,
  Get,
  // UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
// import { TimeExeInterceptor } from './interceptors';

// @UseInterceptors(TimeExeInterceptor) // bind interceptor to controller
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @UseInterceptors(TimeExeInterceptor) // bind interceptor to request handler
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
