import { Injectable } from '@nestjs/common';
import { SongRepository } from './song.repository';
import { CreateSongDto, FindArtistSongsDto, FindSongsByTitleDto, UpdateSongByIdDto } from './song.dto';
import { BaseService } from 'src/common/base';
import { Song } from './song.entity';
import { PaginationOptions } from '../../common/dtos';

@Injectable()
export class SongService extends BaseService<Song> {
    constructor(
        protected readonly songRepository: SongRepository
    ) {
        super(songRepository)
    }

    findMany(dto: FindSongsByTitleDto) {
        return this.songRepository.findMany(dto)
    }

    findArtistSongs(artistId: string, dto: FindArtistSongsDto, pagination: PaginationOptions) {
        return this.songRepository.findArtistSongs(artistId, dto, pagination)
    }
}