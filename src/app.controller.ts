import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';

@Controller()
export class AppController {
  constructor() { }

  @Get()
  getHello(): string {
    return "Hello World!";
  }

  @Get()
  @Render('socket-test')
  testSocketConnections() {}
}
