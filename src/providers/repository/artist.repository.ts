import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { Artist } from 'src/modules/artist/artist.entity';


@Injectable()
export class ArtistRepository extends BaseRepository<Artist> {
    constructor(
        @InjectModel(Artist.name) protected song: Model<Artist>,
    ) {
        super(song)
    }

}