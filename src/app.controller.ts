import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';

@Controller()
export class AppController {
  constructor() { }

  @Get()
  @Render('index')
  getHello() {
    return { message: `A progressive <a href="http://nodejs.org" rel="nofollow">Node.js</a> framework for building efficient and scalable server-side applications.` };
  }
}
