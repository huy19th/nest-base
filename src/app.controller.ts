import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

@UseGuards(ThrottlerGuard)
@Controller()
export class AppController {
  constructor() { }

  @Get()
  getHello(): string {
    return "Hello World!";
  }
}
