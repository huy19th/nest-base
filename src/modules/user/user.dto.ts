import { IsNotEmpty, IsEmail, IsOptional, Length, IsString } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';
import { ArgsType, Field, OmitType as GqlOmitType } from '@nestjs/graphql';

@ArgsType()
export class CreateUserDto {
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field({nullable: true})
    @IsOptional()
    @IsString()
    @Length(3, 20)
    username?: string;

    @Field()
    @IsString()
    @Length(3, 20)
    password: string;

}

export class UpdateUserDto extends OmitType(CreateUserDto, ['email'] as const) { }

export class UpdateUserGqlDto extends GqlOmitType(CreateUserDto, ['email'] as const) { }
