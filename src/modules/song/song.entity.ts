import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToMany,
} from 'typeorm';
import { Artist } from '../artist/artist.entity';
import { SongRecordType } from './song.constant';
import { Paginated } from '../../common/types';

@Entity()
export class Song extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}

export class PaginatedSongs extends Paginated(Song) { }