import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/base';
import { User, UserDocument } from './user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository extends BaseRepository<User> {
    constructor(
        @InjectModel(User.name) protected readonly user: Model<User>
    ) {
        super(user);
    }

    findByEmail(email: string): Promise<UserDocument | null> {
        return this.user.findOne({ email })
    }

    async findUserProfile(id: string): Promise<Pick<UserDocument, 'email' | 'username'> | null> {
        return this.user.findById(id).select(['email', 'username'])
    }
}