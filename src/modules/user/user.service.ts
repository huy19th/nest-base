import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService extends BaseService<User> {
    constructor(
        protected readonly userRepository: UserRepository,
    ) {
        super(userRepository)
    }

    createUser(dto: CreateUserDto) {
        console.log('dto', dto)
        return this.userRepository.createUser(dto)
    }
}