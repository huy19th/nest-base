import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongService } from './song.service';
import { SongController } from './song.controller';
import { Song } from './song.entity';
import { ArtistModule } from '../artist/artist.module';
import { SongResolver } from './song.resolver';

@Module({
    imports: [
        TypeOrmModule.forFeature([Song]),
        ArtistModule,
    ],
    controllers: [SongController],
    providers: [
        SongService,
        SongResolver,
    ],
    exports: [SongService]
})
export class SongModule { }