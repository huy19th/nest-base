import {
    Entity,
    Column,
    ManyToMany,
} from 'typeorm';
import { BaseEntity } from '../../common/base';
import { Paginated } from '../../common/dtos';
import { Artist } from '../artist/artist.entity';
import { SongRecordType } from './song.constant';

@Entity()
export class Song extends BaseEntity {
    @Column({
        type: 'varchar',
        length: 100,
    })
    title: string;

    @Column({
        type: 'date',
        nullable: true,
    })
    releaseDate: Date;

    @ManyToMany(
        () => Artist,
        artist => artist.songs,
        { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true }
    )
    artists?: Artist[];

    @Column({
        type: 'enum',
        enum: SongRecordType,
        nullable: true,
    })
    recordType: SongRecordType;
}

export class PaginatedSongs extends Paginated(Song) { }