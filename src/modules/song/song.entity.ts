import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'
import { BaseEntity } from '../../common/base';
import { Paginated } from '../../common/dtos';
import { Artist } from '../artist/artist.entity';
import { SongRecordType } from './song.constant';

@Schema()
export class Song extends BaseEntity {
    @Prop({ required: true })
    title: string;

    @Prop()
    releaseDate: Date;

    @Prop({
        type: [{
            type: MongooseSchema.Types.ObjectId,
            ref: Artist.name,
        }],
        required: true
    })
    artists?: Artist[];

    @Prop({
        enum: SongRecordType,
        default: SongRecordType.Studio,
        required: true,
    })
    recordType: SongRecordType;
}

export type SongDocument = HydratedDocument<Song>
export const SongSchema = SchemaFactory.createForClass(Song)

export class PaginatedSongs extends Paginated(Song) { }