import {
    Controller,
    Get,
    Put,
    Post,
    Delete,
    Body,
    Param,
    Query,
    UseInterceptors
} from '@nestjs/common';
import { SongService } from './song.service';
import { Song } from './song.entity';
import {
    CreateSongDto,
    FindArtistSongsDto,
    FindSongsByTitleDto,
    UpdateSongByIdDto,
} from './song.dto';
import { PaginationInterceptor } from '../../interceptors';

@Controller('song')
export class SongController {

    constructor(private songService: SongService) { }

    @Get(':id')
    findSongById(@Param('id') songId: string): Promise<Song> {
        return this.songService.findById(songId);
    }

    @Post()
    createSong(@Body() body: CreateSongDto): Promise<Song> {
        return this.songService.create(body);
    }

    @UseInterceptors(PaginationInterceptor)
    @Get()
    findSongsByTitle(@Query() query: FindSongsByTitleDto): Promise<[Song[], number]> {
        return this.songService.findSongsByTitle(query);
    }

    @UseInterceptors(PaginationInterceptor)
    @Get('artist-songs')
    findArtistSongs(@Query() query: FindArtistSongsDto): Promise<[Song[], number]> {
        return this.songService.findArtistSongs(query);
    }

    @Put(':id')
    updateSongById(
        @Param('id') songId: string,
        @Body() body: UpdateSongByIdDto
    ) {
        return this.songService.updateById(songId, body);
    }

    @Delete(':id')
    deleteSongById(@Param('id') songId: string) {
        return this.songService.delete(songId);
    }
}