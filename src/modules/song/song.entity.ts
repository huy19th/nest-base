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
import {
    Field,
    ID,
    Directive,
    ObjectType,
} from '@nestjs/graphql';
import { Paginated } from '../../common/types';

@ObjectType({ description: 'song' })
@Entity()
export class Song extends BaseEntity {
    @Field(type => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Directive('@upper')
    @Column({
        type: 'varchar',
        length: 100,
    })
    title: string;

    @Field({ nullable: true })
    @Column({
        type: 'date',
        nullable: true,
    })
    releaseDate: Date;

    @Field(
        type => [Artist],
        { nullable: true }
    )
    @ManyToMany(
        () => Artist,
        artist => artist.songs,
        { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true }
    )
    artists?: Artist[];

    @Field({ nullable: true })
    @Column({
        type: 'enum',
        enum: SongRecordType,
        nullable: true,
    })
    recordType: SongRecordType;

    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt: Date;

    @Field({ nullable: true })
    @DeleteDateColumn()
    deletedAt: Date;
}

@ObjectType()
export class PaginatedSongs extends Paginated(Song) { }