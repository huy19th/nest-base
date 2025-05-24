import { IsNotEmpty, IsEmail, IsOptional, Length, IsString } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';

export class CreateUserDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    @Length(3, 20)
    username?: string;

    @IsString()
    @Length(3, 20)
    password: string;

}

export class UpdateUserDto extends OmitType(CreateUserDto, ['email'] as const) { }