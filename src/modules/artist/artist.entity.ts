import { BaseEntity } from '../../common/base';
import { Paginated } from '../../common/dtos';
import { Song } from '../song/song.entity';
import { ArtistGender } from './artist.constant';

export class Artist extends BaseEntity {
    name: string;

    gender: ArtistGender;

    songs?: Song[];

    debut: Date;
}

export class PaginatedArtists extends Paginated(Artist) { }