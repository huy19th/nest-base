import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/base';
import { Song } from './song.entity';
import { CreateSongDto, FindArtistSongsDto, FindSongsByTitleDto } from './song.dto';
import { PaginationOptions } from '../../common/dtos';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SongRepository extends BaseRepository<Song> {
    constructor(
        @InjectModel(Song.name) protected song: Model<Song>,
    ) {
        super(song)
    }

    findMany(dto: FindSongsByTitleDto) {
    }

    findArtistSongs(artistId: string, dto: FindArtistSongsDto, pagination: PaginationOptions) {
    }
}