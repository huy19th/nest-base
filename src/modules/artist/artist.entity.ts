import {
    Entity,
    Column,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { BaseEntity } from '../../common/base';
import { Paginated } from '../../common/dtos';
import { Song } from '../song/song.entity';
import { ArtistGender } from './artist.constant';

@Entity()
export class Artist extends BaseEntity {
    @Column({
        type: 'varchar',
        length: 50
    })
    name: string;

    @Column({
        type: 'enum',
        enum: ArtistGender,
        default: ArtistGender.Other,
    })
    gender: ArtistGender;

    @ManyToMany(
        () => Song,
        (song) => song.artists,
        { cascade: true }
    )
    @JoinTable({ name: 'artistSongs' })
    songs?: Song[];

    @Column({
        type: 'date',
        nullable: true,
    })
    debut: Date;
}

export class PaginatedArtists extends Paginated(Artist) { }