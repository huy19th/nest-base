import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/base';
import { Song } from './song.entity';
import { CreateSongDto, FindArtistSongsDto, FindSongsByTitleDto } from './song.dto';
import { PaginationOptions } from '../../common/dtos';

@Injectable()
export class SongRepository extends BaseRepository<Song> {
    constructor(protected readonly songRepository: any) {
        super(songRepository)
    }

    findMany(dto: FindSongsByTitleDto) {
    }

    findArtistSongs(artistId: string, dto: FindArtistSongsDto, pagination: PaginationOptions) {
    }
}