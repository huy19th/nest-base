import {
    IsString,
    IsNotEmpty,
    IsUUID,
    IsOptional,
    IsDate,
    IsEnum,
    IsArray,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { PaginationDto } from '../../common/dto';
import { SongRecordType } from './song.constant';

export class CreateSongDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsDate()
    @IsOptional()
    releaseDate!: Date;

    @IsEnum(SongRecordType)
    @IsOptional()
    recordType: SongRecordType;

    @IsOptional()
    @IsArray()
    @IsUUID(4, { each: true })
    artists: Array<string>;
}

export class FindSongsByTitleDto extends PaginationDto {
    @IsString()
    @IsNotEmpty()
    title!: string;
}

export class FindArtistSongsDto extends PaginationDto {
    @IsNotEmpty()
    @IsUUID(4)
    artistId!: string;

    @IsString()
    @IsOptional()
    @Transform(({ value }: { value: string }) => value ? value.toLowerCase().trim() : value)
    title: string;
}

export class UpdateSongByIdDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsDate()
    @IsOptional()
    releaseDate: Date;

    @IsEnum(SongRecordType)
    @IsOptional()
    recordType: SongRecordType;

    @IsUUID(4, { each: true })
    @IsOptional()
    artistIds: string[];
}