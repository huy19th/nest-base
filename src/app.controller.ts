import {
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { TimeExeInterceptor } from './interceptors';

// @UseInterceptors(TimeExeInterceptor) // bind interceptor to controller
@Controller()
export class AppController {
  constructor() { }

  // @UseInterceptors(TimeExeInterceptor) // bind interceptor to request handler
  @Get()
  getHello(): string {
    return "Hello World!";
  }
}
