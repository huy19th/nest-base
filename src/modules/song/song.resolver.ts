import { NotFoundException, UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { SongService } from './song.service';
import { Song, PaginatedSongs } from './song.entity';
import { CreateSongDto, FindArtistSongsDto } from './song.dto';
import { PaginationInterceptor } from '../../interceptors';
import { Topic } from '../../common/graphql/subscription';

@Resolver(() => Song)
export class SongResolver {
    private pubSub: PubSub;
    constructor(private readonly songService: SongService) {
        this.pubSub = new PubSub();
    }

    @Query(
        () => Song,
        { nullable: true }
    )
    async song(@Args('id') songId: string): Promise<Song> {
        const song = await this.songService.findById(songId);
        if (!song) throw new NotFoundException(`Song with id ${songId} not found`);
        return song;
    }

    @UseInterceptors(PaginationInterceptor)
    @Query(
        () => PaginatedSongs,
        { nullable: true }
    )
    async songsOfArtist(@Args() args: FindArtistSongsDto) {
        const songs = await this.songService.findArtistSongs(args);
        return songs;
    }

    @Mutation(returns => Song)
    async createSong(@Args() args: CreateSongDto) {
        const song = await this.songService.create(args);
        this.pubSub.publish(Topic.NewSongAdded, { title: args.title });
        return song;
    }

    @Subscription(
        returns => String,
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
        return this.pubSub.asyncIterator(Topic.NewSongAdded)
    }
}