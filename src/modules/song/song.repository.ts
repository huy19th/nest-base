import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/base';
import { Song } from './song.entity';
import { CreateSongDto, FindArtistSongsDto, FindSongsByTitleDto } from './song.dto';
import { PaginationOptions } from '../../common/dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, ILike, Repository } from 'typeorm';

@Injectable()
export class SongRepository extends BaseRepository<Song> {
    constructor(
        @InjectRepository(Song)
        protected readonly songRepository: Repository<Song>
    ) {
        super(songRepository)
    }

    createSong({ artistIds, ...data }: CreateSongDto) {
        const song = new Song()
        Object.assign(song, { ...data, artists: artistIds.map(id => ({ id })) })
        return song.save()
    }

    findMany(dto: FindSongsByTitleDto) {
        const queryOptions: FindManyOptions<Song> = {
            order: { title: 'ASC' },
            skip: (dto.page - 1) * dto.limit,
            take: dto.limit,
        }
        if (dto.title) queryOptions.where = { title: ILike(`%${dto.title}%`) }
        return this.songRepository.findAndCount(queryOptions)
    }

    findArtistSongs(artistId: string, dto: FindArtistSongsDto, pagination: PaginationOptions) {
        return this.songRepository.findAndCount({
            where: { artists: { id: artistId } },
            order: { createdAt: 'DESC' },
            skip: (pagination.page - 1) * pagination.limit,
            take: pagination.limit,
        })
    }
}