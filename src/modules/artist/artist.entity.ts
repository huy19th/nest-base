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
import {
    Field,
    ID,
    Directive,
    ObjectType,
} from '@nestjs/graphql';
import { Paginated } from '../../common/types';

@ObjectType({ description: 'artist' })
@Entity()
export class Artist extends BaseEntity {
    @Field(type => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Directive('@upper')
    @Column({
        type: 'varchar',
        length: 50
    })
    name: string;

    @Field(type => ArtistGender)
    @Column({
        type: 'enum',
        enum: ArtistGender,
        default: ArtistGender.Other,
    })
    gender: ArtistGender;

    @Field(
        type => [Song],
        { nullable: true }
    )
    @ManyToMany(
        () => Song,
        (song) => song.artists,
        { cascade: true }
    )
    @JoinTable({ name: 'artistSongs' })
    songs?: Song[];

    @Field()
    @Column({
        type: 'date',
        nullable: true,
    })
    debut: Date;
}

@ObjectType()
export class PaginatedArtists extends Paginated(Artist) { }