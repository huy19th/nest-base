import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from './base.repository';
import { Song } from '../../modules/song/song.entity';


@Injectable()
export class SongRepository extends BaseRepository<Song> {
    constructor(
        @InjectModel(Song.name) protected song: Model<Song>,
    ) {
        super(song)
    }

}