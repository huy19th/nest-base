import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CacheModule } from 'src/providers/cache/cache.module';
import { UserModule } from '../user/user.module';
import { TokenModule } from '../../providers/token/token.module';

@Module({
    imports: [
        ConfigModule,
        CacheModule,
        TokenModule,
        UserModule,
    ],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule { }