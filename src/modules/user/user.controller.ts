import { Controller, Param, Body, Get, Post, Patch, Delete } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserService } from './user.service';
import { UserDocument } from './user.schema';

@Controller('user')
export class UsersController {

    constructor(private UserService: UserService) { }

    @Get(':id')
    async getProfile(@Param('id') id: string) {
        const profile = await this.UserService.getUserProfile(id);
        return profile;
    }

    @Post()
    async createUser(@Body() body: CreateUserDto): Promise<UserDocument> {
        const user: UserDocument = await this.UserService.create(body);
        return user;
    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto): Promise<UserDocument> {
        const user: UserDocument = await this.UserService.updateUser(id, body);
        return user;
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<string> {
        await this.UserService.deleteUser(id);
        return 'success';
    }
}