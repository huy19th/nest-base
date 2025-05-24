import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService extends BaseService<User> {
    constructor(
        protected readonly userRepository: UserRepository,
    ) {
        super(userRepository)
    }
}