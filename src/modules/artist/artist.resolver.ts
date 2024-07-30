import { NotFoundException, UseInterceptors } from '@nestjs/common';
import { Args, Context, Info, Mutation, Parent, Query, Resolver, Root, Subscription } from '@nestjs/graphql';
import { FieldMap } from '@jenyus-org/nestjs-graphql-utils';
import { PubSub } from 'graphql-subscriptions';
import { ArtistService } from './artist.service';
import { Artist, PaginatedArtists } from './artist.entity';
import { CreateArtistDto, FindArtistsByNameDto } from './artist.dto';
import { PaginationInterceptor } from '../../interceptors';


@Resolver(() => Artist)
export class ArtistResolver {

    constructor(private readonly artistService: ArtistService) { }

    @Query(() => Artist)
    async artist(@Args('id') artistId: string, @FieldMap() fieldMap: any): Promise<Artist> {
        // const artist = await this.artistService.findById(artistId);
        const artist = await this.artistService.findOneDynamicSelect({id: artistId}, fieldMap.artist)
        if (!artist) throw new NotFoundException(`Artist with id ${artistId} not found`);
        return artist;
    }

    @UseInterceptors(PaginationInterceptor)
    @Query(() => PaginatedArtists)
    async artists(@Args() args: FindArtistsByNameDto) {
        return this.artistService.findArtistsByName(args);
    }

    @Mutation(returns => Artist)
    createArtist(@Args() args: CreateArtistDto) {
        return this.artistService.create(args);
    }

    @Mutation(returns => Boolean)
    async deleteArtist(@Args('id')artistId: string) {
        const deleteResult = await this.artistService.delete(artistId)
        return deleteResult.affected > 0;
    }
}