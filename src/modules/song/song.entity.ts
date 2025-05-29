import {
    Entity,
    Column,
    ManyToMany,
} from 'typeorm';
import { BaseEntity } from '../../common/base';
import { Paginated } from '../../common/dtos';
import { Artist } from '../artist/artist.entity';
import { SongRecordType } from './song.constant';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Song extends BaseEntity {
    @Field()
    @Column({
        type: 'varchar',
        length: 100,
    })
    title: string;

    @Field()
    @Column({
        type: 'date',
        nullable: true,
    })
    releaseDate: Date;

    @Field(() => [Artist], {nullable: true})
    @ManyToMany(
        () => Artist,
        artist => artist.songs,
        { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true }
    )
    artists?: Artist[];

    @Field(() => SongRecordType)
    @Column({
        type: 'enum',
        enum: SongRecordType,
        nullable: true,
    })
    recordType: SongRecordType;
}

@ObjectType()
export class PaginatedSongs extends Paginated(Song) { }