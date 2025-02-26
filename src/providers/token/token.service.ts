import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { verify, sign } from 'jsonwebtoken';
import { Config } from 'src/config';

@Injectable()
export class TokenService {

    constructor(private readonly configService: ConfigService) { }

    signJwt(payload: string | object | Buffer, expiresIn: string): string {
        return sign(
            payload,
            this.configService.get<Config['security']['jwtSecret']>('security.jwtSecret'),
            { expiresIn }
        )
    }

    verifyJwt<T>(token: string): T {
        try {
            return (verify(token, this.configService.get<string>('security.jwtSecret'))) as T;
        }
        catch (err) {
            throw new UnauthorizedException();
        }
    }
}