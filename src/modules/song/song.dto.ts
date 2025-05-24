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
import { SongRecordType } from './song.constant';
import { PaginationOptions } from '../../common/dtos';


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
    artistIds: Array<string>;
}

export class FindSongsByTitleDto extends PaginationOptions {
    @IsString()
    @IsOptional()
    title: string;
}

export class FindArtistSongsDto {
    @IsString()
    @IsOptional()
    @Transform(({ value }: { value: string }) => value?.toLowerCase().trim())
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