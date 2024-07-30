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
import { ArgsType, Field, ID } from '@nestjs/graphql';
import { SongRecordType } from './song.constant';

@ArgsType()
export class CreateSongDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    title!: string;

    @Field({nullable: true})
    @IsDate()
    @IsOptional()
    releaseDate!: Date;

    @Field(type => SongRecordType, { nullable: true })
    @IsEnum(SongRecordType)
    @IsOptional()
    recordType: SongRecordType;

    @Field(type => [String], { nullable: true })
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

@ArgsType()
export class FindArtistSongsDto extends PaginationDto {
    @Field(type => ID)
    @IsNotEmpty()
    @IsUUID(4)
    artistId!: string;

    @Field({ nullable: true })
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