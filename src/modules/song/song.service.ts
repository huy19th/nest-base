import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { BaseService } from '../../common/base/base.service';
import { ArtistService } from '../artist/artist.service';
import { Song } from './song.entity';
import {
    CreateSongDto,
    FindSongsByTitleDto,
    UpdateSongByIdDto,
    FindArtistSongsDto,
} from './song.dto';

@Injectable()
export class SongService extends BaseService<Song> {

    constructor(
        @InjectRepository(Song) repository: Repository<Song>,
        private artistService: ArtistService,
        private dataSource: DataSource,
    ) {
        super(repository);
    }

    findSongsByTitle({ title, limit, page }: FindSongsByTitleDto): Promise<[Song[], number]> {
        return this.repository.createQueryBuilder('song')
            .where('lower(song.title) like :title', { title: `${title.toLocaleLowerCase()}%` })
            .skip((page - 1) * limit)
            .take(limit)
            .getManyAndCount();
    }

    findArtistSongs({ artistId, title, limit, page }: FindArtistSongsDto): Promise<[Song[], number]> {
        let query = this.repository.createQueryBuilder('song')
            .innerJoin('song.artists', 'artist')
            .where('artist.id = :artistId', { artistId });
        if (title) query = query.andWhere('song.title like :title', { title: `%${title}%` });
        query = query.skip((page - 1) * limit).take(limit);
        return query.getManyAndCount();
    }

    async create({ artists, ...data }: CreateSongDto): Promise<Song> {
        let song = new Song();
        Object.assign(song, { ...data });
        await song.save();
        if (artists && artists.length) {
            await this.dataSource.createQueryBuilder()
                .relation(Song, 'artists')
                .of(song)
                .add(artists);
        }
        return song;
    }

    async updateById(songId: string, { artistIds, ...data }: UpdateSongByIdDto) {
        let artists = await Promise.all(artistIds.map(artistId => this.artistService.findById(artistId)));
        let song = await this.findById(songId);
        Object.assign(song, { ...data, artists });
        return song.save();
    }

}