import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from 'src/common/base';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserRepository extends BaseRepository<User> {
    constructor(
        @InjectRepository(User)
        protected readonly userRepository: Repository<User>
    ) {
        super(userRepository)
    }

    createUser(dto: CreateUserDto) {
        const user = new User()
        Object.assign(user, dto)
        return user.save()
    }
}
