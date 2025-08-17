import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { ArtistModule } from '../artist/artist.module';
import { SongService } from './song.service';
import { SongRepository } from './song.repository';
import { Song, SongSchema } from './song.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        ArtistModule,
        MongooseModule.forFeature([
            { name: Song.name, schema: SongSchema }
        ])
    ],
    controllers: [SongController],
    providers: [SongService, SongRepository],
    exports: [SongService]
})
export class SongModule { }