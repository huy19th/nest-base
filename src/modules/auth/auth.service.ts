import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TokenService } from '../../providers/token/token.service';
import { LogInResponse } from './auth.type';
import { Config } from 'src/config';
import { User } from '../user/user.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private tokenService: TokenService,
        private configService: ConfigService,
    ) { }

    async logIn(email: string, password: string): Promise<LogInResponse> {
        const user: User = await this.userService.findByEmail(email);
        if (!user) throw new NotFoundException({ message: 'User not found' });
        const passwordCorrect = await user.comparePassword(password);
        if (!passwordCorrect) throw new UnauthorizedException({ message: 'Password incorrect' });
        const timestamp: string = Date.now().toString();
        const accessToken: string = this.tokenService.signJwt(
            { id: user.id, key: timestamp },
            this.configService.get<Config['security']['accessTokenExpiry']>('security.accessTokenExpiry')
        );
        return { accessToken };
    }

    async register(email: string, password: string): Promise<void> {
        await this.userService.create(email, password);
    }
}