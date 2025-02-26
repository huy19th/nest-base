import {
  Controller,
  Get,
  Logger,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger: Logger = new Logger(AppController.name, { timestamp: true });
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    this.logger.log("random log");
    return this.appService.getHello();
  }
}
