import { BaseEntity } from '../../common/base';
import { Paginated } from '../../common/dtos';
import { Artist } from '../artist/artist.entity';
import { SongRecordType } from './song.constant';

export class Song extends BaseEntity {
    title: string;

    releaseDate: Date;

    artists?: Artist[];

    recordType: SongRecordType;
}

export class PaginatedSongs extends Paginated(Song) { }