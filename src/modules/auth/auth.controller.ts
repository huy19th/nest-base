import {
    Controller,
    Body,
    Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './auth.decorator';
import { LogInDto, RegisterDto } from './auth.dto';
import { LogInResponse } from './auth.type';

@Public()
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('login')
    async logIn(@Body() { email, password }: LogInDto): Promise<LogInResponse> {
        return await this.authService.logIn(email, password);
    }

    @Post('register')
    async register(@Body() { email, password }: RegisterDto): Promise<void> {
        await this.authService.register(email, password);
    }
}