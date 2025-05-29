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
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Artist extends BaseEntity {
    @Field()
    @Column({
        type: 'varchar',
        length: 50
    })
    name: string;

    @Field(() => ArtistGender)
    @Column({
        type: 'enum',
        enum: ArtistGender,
        default: ArtistGender.Other,
    })
    gender: ArtistGender;

    @Field(() => [Song], {nullable: true})
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