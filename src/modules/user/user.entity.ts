import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, UpdateQuery } from 'mongoose';
import { MongoError } from 'mongodb';
import { hash, compare } from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema({
    versionKey: false,
    timestamps: true
})
export class User {

    @Prop({
        type: String,
        required: [true, 'Email required'],
        unique: true,
        validate: {
            validator: function (value: string) {
                return /^\S+@\S+\.\S+$/.test(value);
            },
            message: prop => `${prop.value} is not a valid email`
        }
    })
    email: string;

    @Prop({
        type: String,
        required: [true, 'Password required']
    })
    password: string;

    @Prop({
        type: String
    })
    username?: string;

}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next: Function) {
    if (this.isModified('password')) this.password = await hash(this.password, 10);
});

UserSchema.pre('findOneAndUpdate', async function (next: Function) {
    const query: UpdateQuery<User> = this.getUpdate() as UpdateQuery<User>
    if (query.password) query.password = await hash(query.password, 10)
    next();
})

UserSchema.post('save', function (err: MongoError, doc: UserDocument, next: Function) {
    if (err.code == 11000) {
        next(new BadRequestException('Email already exists'));
    }
    else {
        next(new InternalServerErrorException(err.message));
    }
});

UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    let isMatch: boolean = await compare(candidatePassword, this.password);
    return isMatch;
};