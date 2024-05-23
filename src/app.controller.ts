import {
  Controller,
  Get,
  Logger,
} from '@nestjs/common';

@Controller()
export class AppController {
  private logger: Logger = new Logger(AppController.name, { timestamp: true });
  constructor() { }

  @Get()
  getHello(): string {
    this.logger.log("random log");
    return "Hello World!";
  }
}
