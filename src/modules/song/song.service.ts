import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { SongRepository } from './song.repository';
import { CreateSongDto, FindArtistSongsDto, FindSongsByTitleDto, UpdateSongByIdDto } from './song.dto';
import { BaseService } from 'src/common/base';
import { Song } from './song.entity';
import { PaginationOptions } from '../../common/dtos';
import { Artist } from '../artist/artist.entity';

@Injectable()
export class SongService extends BaseService<Song> {
    constructor(
        protected readonly songRepository: SongRepository
    ) {
        super(songRepository)
    }

    createSong(dto: CreateSongDto) {
        return this.songRepository.createSong(dto)
    }

    async updateSong(songId: string, { artistIds, ...data }: UpdateSongByIdDto) {
        let song = await this.findById(songId);
        if (!song) throw new NotFoundException();
        Object.assign(song, { ...data, artists: artistIds.map(id => ({ id }) as Artist) });
        return song.save();
    }

    findMany(dto: FindSongsByTitleDto) {
        return this.songRepository.findMany(dto)
    }

    findArtistSongs(artistId: string, dto: FindArtistSongsDto, pagination: PaginationOptions) {
        return this.songRepository.findArtistSongs(artistId, dto, pagination)
    }
}