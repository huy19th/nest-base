import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongService } from './song.service';
import { SongController } from './song.controller';
import { Song } from './song.entity';
import { ArtistModule } from '../artist/artist.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Song]),
        ArtistModule,
    ],
    controllers: [SongController],
    providers: [SongService],
    exports: [SongService]
})
export class SongModule { }