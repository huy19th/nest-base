import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/base';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends BaseRepository<User> {
    constructor(protected readonly userRepository: any) {
        super(userRepository)
    }
}