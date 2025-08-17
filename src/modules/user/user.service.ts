import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/common/base';
import { User, UserDocument } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService extends BaseService<User> {
    constructor(
        protected readonly userRepository: UserRepository,
    ) {
        super(userRepository)
    }

    create(data: CreateUserDto): Promise<UserDocument> {
        return this.userRepository.create(data) as Promise<UserDocument>;
    }

    findByEmail(email: string): Promise<UserDocument | null> {
        return this.userRepository.findByEmail(email);
    }

    findById(id: string): Promise<UserDocument | null> {
        return this.userRepository.findById(id);
    }

    findUserProfile(id: string): Promise<Pick<UserDocument, 'email' | 'username'> | null> {
        return this.userRepository.findUserProfile(id)
    }

    async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<UserDocument> {
        let user = await this.userRepository.update(userId, updateUserDto);
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    async deleteUser(userId: string): Promise<UserDocument | null> {
        return this.userRepository.delete(userId);
    }

    // async searchUser(search: string) {
    //     return this.userRepository.offset(
    //         {
    //             $or: [
    //                 { username: { $regex: new RegExp(`^${search}`) } },
    //                 {}
    //             ]
    //         }
    //     )
    // }
}
