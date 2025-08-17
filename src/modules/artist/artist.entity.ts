import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {
    HydratedDocument,
    // Schema as MongooseSchema,
} from 'mongoose'
import { BaseEntity } from '../../common/base';
import { Paginated } from '../../common/dtos';
import { Song } from '../song/song.entity';
import { ArtistGender } from './artist.constant';

@Schema()
export class Artist extends BaseEntity {
    @Prop({ required: true })
    name: string;

    @Prop({
        enum: ArtistGender,
        required: true,
        default: ArtistGender.Other
    })
    gender: ArtistGender;

    // @Prop({
    //     type: [{
    //         type: MongooseSchema.Types.ObjectId,
    //         ref: Song.name,
    //     }],
    // })
    songs?: Song[];

    @Prop()
    debut: Date;
}

export type ArtistDocument = HydratedDocument<Artist>
export const ArtistSchema = SchemaFactory.createForClass(Artist)

export class PaginatedArtists extends Paginated(Artist) { }