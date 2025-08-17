import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../modules/user/user.entity';
import { BaseRepository } from './base.repository';

@Injectable()
export class UserRepository extends BaseRepository<User> {
    constructor(
        @InjectModel(User.name) protected readonly user: Model<User>
    ) {
        super(user);
    }

    findByEmail(email: string): Promise<UserDocument> {
        return this.user.findOne({ email }) as Promise<UserDocument>
    }

    async findUserProfile(id: string): Promise<Pick<UserDocument, 'email' | 'username'>> {
        return this.user.findById(id).select(['email', 'username']) as Promise<Pick<UserDocument, 'email' | 'username'>>
    }

}