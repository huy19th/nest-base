import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    create(@Body() body: CreateUserDto) {
        return this.userService.create(body)
    }

    @Put(':id')
    findById(@Param('id') songId: string) {
        return this.userService.findById(songId)
    }

    @Put(':id')
    update(
        @Param('id') userId: string,
        @Body() body: UpdateUserDto
    ) {
        return this.userService.update(userId, body)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(id)
    }

}