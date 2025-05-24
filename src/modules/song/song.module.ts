import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { ArtistModule } from '../artist/artist.module';
import { SongService } from './song.service';
import { SongRepository } from './song.repository';

@Module({
    imports: [
        ArtistModule,
    ],
    controllers: [SongController],
    providers: [SongService, SongRepository],
    exports: [SongService]
})
export class SongModule { }