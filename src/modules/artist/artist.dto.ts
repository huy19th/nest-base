import {
    IsString,
    IsNotEmpty,
    IsEnum,
    IsDate,
    IsOptional,
} from 'class-validator';
import { ArtistGender } from './artist.constant';
import { PaginationOptions } from '../../common/dtos';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateArtistDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    name!: string;

    @Field(() => ArtistGender)
    @IsEnum(ArtistGender)
    gender: ArtistGender;

    @Field()
    @IsDate()
    @IsOptional()
    debut: Date;
}

@ArgsType()
export class FindArtistsByNameDto extends PaginationOptions {
    @Field()
    @IsString()
    @IsOptional()
    name: string;
}

@ArgsType()
export class UpdateArtistDto {
    @Field({ nullable: true })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @Field({ nullable: true })
    @IsEnum(ArtistGender)
    @IsOptional()
    gender: ArtistGender;

    @Field({ nullable: true })
    @IsDate()
    @IsOptional()
    debut: Date;
}