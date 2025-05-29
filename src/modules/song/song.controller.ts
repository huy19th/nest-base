import {
    Controller,
    Get,
    Put,
    Post,
    Delete,
    Body,
    Param,
    Query,
    UseInterceptors,
    ParseUUIDPipe
} from '@nestjs/common';
import {
    CreateSongDto,
    FindSongsByTitleDto,
    FindArtistSongsDto,
    UpdateSongByIdDto
} from './song.dto';
import { SongService } from './song.service';
import { PaginationInterceptor } from '../../interceptors';
import { PaginationOptions } from '../../common/dtos';

@Controller('song')
export class SongController {

    constructor(private readonly songService: SongService) { }

    @Post()
    create(@Body() body: CreateSongDto) {
        return this.songService.createSong(body)
    }

    @Put(':id')
    findById(@Param('id') songId: string) {
        return this.songService.findById(songId)
    }

    @UseInterceptors(PaginationInterceptor)
    @Get()
    findMany(@Query() query: FindSongsByTitleDto) {
        return this.songService.findMany(query)
    }

    @UseInterceptors(PaginationInterceptor)
    @Get('artist/:artistId')
    findArtistSongs(
        @Param('id', ParseUUIDPipe) artistId: string,
        @Query() query: FindArtistSongsDto,
        @Query() pagination: PaginationOptions,
    ) {
        return this.songService.findArtistSongs(artistId, query, pagination)
    }

    @Put(':id')
    update(
        @Param('id') songId: string,
        @Body() body: UpdateSongByIdDto
    ) {
        return this.songService.update(songId, body)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.songService.delete(id)
    }

}