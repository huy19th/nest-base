import {
    IsString,
    IsNotEmpty,
    IsEnum,
    IsDate,
    IsOptional,
} from 'class-validator';
import { PaginationDto } from '../../common/dto';
import { ArtistGender } from './artist.constant';

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

export class FindArtistsByNameDto extends PaginationDto {
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