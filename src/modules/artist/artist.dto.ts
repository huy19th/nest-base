import {
    IsString,
    IsNotEmpty,
    IsEnum,
    IsDate,
    IsOptional,
} from 'class-validator';
import { ArtistGender } from './artist.constant';
import { PaginationOptions } from '../../common/dtos';

export class CreateArtistDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsEnum(ArtistGender)
    gender: ArtistGender;

    @IsDate()
    @IsOptional()
    debut: Date;
}

export class FindArtistsByNameDto extends PaginationOptions {
    @IsString()
    @IsOptional()
    name: string;
}

export class UpdateArtistDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name?: string;

    @IsEnum(ArtistGender)
    @IsOptional()
    gender?: ArtistGender;

    @IsDate()
    @IsOptional()
    debut?: Date;
}