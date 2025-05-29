import { NotFoundException, ParseUUIDPipe, UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SongService } from './song.service';
import { Song, PaginatedSongs } from './song.entity';
import { CreateSongDto, FindArtistSongsDto } from './song.dto';
import { PaginationInterceptor } from '../../interceptors/pagination.interceptor';
import { PaginationOptions } from '../../common/dtos';
import { SelectedFields } from 'src/common/graphql';

@Resolver(() => Song)
export class SongResolver {
    constructor(private readonly songService: SongService) {}

    @Query(() => Song, { nullable: true })
    async findSongById(@Args('id') songId: string, @SelectedFields() selectedFields: any): Promise<Song> {
        console.log(selectedFields)
        const song = await this.songService.findOneDynamicSelect({id: songId}, selectedFields);
        if (!song) throw new NotFoundException(`Song with id ${songId} not found`);
        return song;
    }

    @UseInterceptors(PaginationInterceptor)
    @Query(() => PaginatedSongs)
    async findArtistSongs(
        @Args('artistId', ParseUUIDPipe) artistId: string,
        @Args() args: FindArtistSongsDto,
        @Args() pagination: PaginationOptions,
    ) {
        const songs = await this.songService.findArtistSongs(artistId, args, pagination);
        return songs;
    }

    @Mutation(() => Song)
    async createSong(@Args() args: CreateSongDto) {
        const song = await this.songService.create(args);
        return song;
    }
}