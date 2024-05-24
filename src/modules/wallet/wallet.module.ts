import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/providers/prisma/prisma.module';
import { WalletsController } from './wallet.controller';
import { WalletService } from './wallet.service';

@Module({
    imports: [PrismaModule],
    controllers: [WalletsController],
    providers: [WalletService],
    exports: [WalletService],
})
export class WalletModule { }