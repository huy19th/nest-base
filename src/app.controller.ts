import {
  Controller,
  Get,
  Param
} from '@nestjs/common';
import * as workerpool from 'workerpool';
import { join } from 'path';

@Controller()
export class AppController {
  constructor() { }

  @Get(':max')
  async calculate(@Param('max') max: number): Promise<string> {
    const pool1 = workerpool.pool(join(__dirname, './tasks/prime-number.js'));
    const pool2 = workerpool.pool(join(__dirname, './tasks/perfect-number.js'));
    const [primes, perfect] = await Promise.all([
      pool1.exec('primes', [max]),
      pool2.exec('perfects', [max]),
    ])
    return primes + '\r\n' + perfect;
  }
}
