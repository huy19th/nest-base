import {
    Controller,
    Get,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Roles } from '../auth/auth.decorator';
import { Role } from './user.schema';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Roles(Role.Admin)
    @Get()
    getAllUsers() {
        return this.userService.findAll();
    }
}