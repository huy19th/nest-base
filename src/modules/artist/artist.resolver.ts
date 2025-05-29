import { NotFoundException, UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArtistService } from './artist.service';
import { Artist, PaginatedArtists } from './artist.entity';
import { CreateArtistDto, FindArtistsByNameDto, UpdateArtistDto } from './artist.dto';
import { PaginationInterceptor } from '../../interceptors/pagination.interceptor';

@Resolver(() => Artist)
export class ArtistResolver {

    constructor(private readonly artistService: ArtistService) { }

    @Query(() => Artist)
    async findArtistById(@Args('id') artistId: string): Promise<Artist> {
        const artist = await this.artistService.findById(artistId);
        if (!artist) throw new NotFoundException(`Artist with id ${artistId} not found`);
        return artist;
    }

    @UseInterceptors(PaginationInterceptor)
    @Query(() => PaginatedArtists)
    async findArtists(@Args() args: FindArtistsByNameDto) {
        return this.artistService.findByName(args);
    }

    @Mutation(() => Artist)
    createArtist(@Args() args: CreateArtistDto) {
        return this.artistService.create(args);
    }

    @Mutation(() => Artist)
    updateArtist(
        @Args('id') artistId: string,
        @Args() args: UpdateArtistDto,
    ) {
        return this.artistService.update(artistId, args)
    }

    @Mutation(() => Boolean)
    async deleteArtist(@Args('id') artistId: string) {
        const deleteResult = await this.artistService.delete(artistId)
        return (deleteResult.affected || 0) > 0;
    }

}