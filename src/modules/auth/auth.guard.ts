import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { TokenService } from '../../providers/token/token.service';
import { IS_PUBLIC_KEY } from './auth.decorator';
import { AccessTokenPayload } from './auth.type';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private tokenService: TokenService,
        private userService: UserService,
        private reflector: Reflector,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) return true;

        const request: Request = context.switchToHttp().getRequest<Request>();
        const token = this.extractTokenFromHeader(request);
        if (!token) throw new UnauthorizedException();

        const decoded: AccessTokenPayload = await this.tokenService.verifyJwt(token);
        const userId = decoded.id;
        const user = this.userService.findById(userId);
        request['user'] = user;
        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}