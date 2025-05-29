import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const gqlContext = GqlExecutionContext.create(context);
        const { req } = gqlContext.getContext();

        const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedException('Authorization header is missing or invalid');
        }

        const token = authHeader.split(' ')[1];
        // need to add logic to decode token & get user info
        const user = { id: 1, name: 'mock' };
        if (user) {
            req.user = user;
            return true;
        }

        throw new UnauthorizedException('Unauthorized');
    }
}