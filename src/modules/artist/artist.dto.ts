import {
    IsString,
    IsNotEmpty,
    IsEnum,
    IsDate,
    IsOptional,
} from 'class-validator';
import { PaginationDto } from '../../common/dto';
import { ArtistGender } from './artist.constant';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateArtistDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    name!: string;

    @Field(type => ArtistGender, {nullable: true})
    @IsEnum(ArtistGender)
    gender: ArtistGender;

    @Field({nullable: true})
    @IsDate()
    @IsOptional()
    debut: Date;
}

@ArgsType()
export class FindArtistsByNameDto extends PaginationDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string;
}

export class UpdateArtistDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsEnum(ArtistGender)
    @IsOptional()
    gender: ArtistGender;

    @IsDate()
    @IsOptional()
    debut: Date;
}