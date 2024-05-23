import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CacheService } from 'src/providers/cache/cache.service';
import { Configuration } from 'src/config/configuration.interface';
import { TokenService } from '../../providers/token/token.service';
import { UserDocument } from '../user/user.schema';
import { UserService } from '../user/user.service';
import { LogInResponse } from './auth.type';

@Injectable()
export class AuthService {

    cacheExpiry: number;

    constructor(
        private userService: UserService,
        private tokenService: TokenService,
        private configService: ConfigService,
        private cacheService: CacheService
    ) {
        this.cacheExpiry = this.configService.get<Configuration['security']['cacheExpiry']>('security.cacheExpiry');
    }

    async logIn(email: string, password: string): Promise<LogInResponse> {
        const user: UserDocument = await this.userService.findUserByEmail(email);
        if (!user) throw new NotFoundException({ message: 'User not found' });
        const passwordCorrect = await user['comparePassword'](password);
        if (!passwordCorrect) throw new UnauthorizedException({ message: 'Password incorrect' });
        const _id: string = user._id.toString();
        const timestamp: string = Date.now().toString();
        const accessToken: string = this.tokenService.signJwt(
            { _id, key: timestamp },
            this.configService.get<Configuration['security']['accessTokenExpiry']>('security.accessTokenExpiry')
        );
        this.cacheService.redis.set(timestamp, accessToken, this.cacheExpiry);
        return { accessToken };
    }

    async register(email: string, password: string): Promise<void> {
        await this.userService.create({ email, password });
    }
}