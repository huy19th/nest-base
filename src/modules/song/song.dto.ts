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
import { ArgsType, Field } from '@nestjs/graphql';


@ArgsType()
export class CreateSongDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    title!: string;

    @Field({ nullable: true })
    @IsDate()
    @IsOptional()
    releaseDate!: Date;

    @Field(() => SongRecordType, { nullable: true })
    @IsEnum(SongRecordType)
    @IsOptional()
    recordType: SongRecordType;

    @Field(() => [String], { nullable: true })
    @IsOptional()
    @IsArray()
    @IsUUID(4, { each: true })
    artistIds: Array<string>;
}

@ArgsType()
export class FindSongsByTitleDto extends PaginationOptions {
    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    title: string;
}

@ArgsType()
export class FindArtistSongsDto {
    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    @Transform(({ value }: { value: string }) => value?.toLowerCase().trim())
    title: string;
}

@ArgsType()
export class UpdateSongByIdDto {
    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    title: string;

    @Field({ nullable: true })
    @IsDate()
    @IsOptional()
    releaseDate: Date;

    @Field({ nullable: true })
    @IsEnum(SongRecordType)
    @IsOptional()
    recordType: SongRecordType;

    @Field(() => [String], { nullable: true })
    @IsUUID(4, { each: true })
    @IsOptional()
    artistIds: string[];
}