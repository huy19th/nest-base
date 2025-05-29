import { NotFoundException, ParseUUIDPipe, UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { SongService } from './song.service';
import { Song, PaginatedSongs } from './song.entity';
import { CreateSongDto, FindArtistSongsDto } from './song.dto';
import { PaginationInterceptor } from '../../interceptors/pagination.interceptor';
import { PaginationOptions } from '../../common/dtos';
import { Topic } from 'src/common/graphql';

@Resolver(() => Song)
export class SongResolver {
    protected pubSub: PubSub;
    constructor(private readonly songService: SongService) {
        this.pubSub = new PubSub();
    }

    @Query(() => Song, { nullable: true })
    async findSongById(@Args('id') songId: string): Promise<Song> {
        const song = await this.songService.findById(songId);
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

    @Subscription(
        () => String,
        {
            // filter which evvent should publish to client, publish if filter function returns true
            filter: (
                payload: { title: string },
                variable: { title: string }
            ) => {
                console.log(payload, variable)
                return payload.title.toLowerCase().includes(variable.title.toLowerCase())
            },
            // mutate event payload with resolve function
            resolve: value => value.title
        }
    )
    newSongAdded(@Args('title') title: string) {
        return this.pubSub.asyncIterableIterator(Topic.NewSongAdded)
    }
}