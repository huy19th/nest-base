import { Controller, Get, Post, Delete, Body, Patch, Param } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto, AdjustBalanceDto } from './wallet.dto';
import { IWallet } from './wallet.interface';

// just for testing database interaction, not how api should be configured
@Controller('wallets')
export class WalletsController {

    constructor(private walletService: WalletService) { }

    @Get('/all-wallets')
    async getAllWallets(): Promise<IWallet[]> {
        const wallets = await this.walletService.getAllWallets();
        return wallets.map(wallet => ({ ...wallet, balance: wallet.balance.toString() }));
    }

    @Get('/:id')
    async getWallet(@Param('id') id: string): Promise<IWallet | null> {
        const wallet = await this.walletService.getWallet(id);
        if (!wallet) return null;
        return { ...wallet, balance: wallet.balance.toString() };
    }

    @Post()
    async createWallet(@Body() body: CreateWalletDto): Promise<IWallet> {
        const wallet = await this.walletService.createWallet(body.balance);
        return { ...wallet, balance: wallet.balance.toString() };
    }

    @Patch('/:id')
    async adjustBalance(
        @Param('id') id: string,
        @Body() body: AdjustBalanceDto
    ): Promise<IWallet> {
        const wallet = await this.walletService.adjustBalance(id, body.balance);
        return { ...wallet, balance: wallet.balance.toString() };
    }

    @Delete('/:id')
    async deleteWallet(@Param('id') id: string) {
        await this.walletService.deleteWallet(id);
    }

}