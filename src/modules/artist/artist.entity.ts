import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    BaseEntity,
} from 'typeorm';
import { ArtistGender } from './artist.constant';
import { Song } from '../song/song.entity';
import { Paginated } from '../../common/types';

@Entity()
export class Artist extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

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