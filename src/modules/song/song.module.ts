import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { ArtistModule } from '../artist/artist.module';
import { SongService } from './song.service';
import { SongRepository } from './song.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './song.entity';
import { SongResolver } from './song.resolver';

@Module({
    imports: [
        TypeOrmModule.forFeature([Song]),
        ArtistModule,
    ],
    controllers: [SongController],
    providers: [SongService, SongRepository, SongResolver],
    exports: [SongService]
})
export class SongModule { }