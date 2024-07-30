import {
    Controller,
    Get,
    Post,
    Put,
    Param,
    Body,
    Query,
    UseInterceptors,
} from '@nestjs/common';
import { ArtistService } from './artist.service';
import {
    CreateArtistDto,
    FindArtistsByNameDto,
    UpdateArtistDto,
} from './artist.dto';
import { PaginationInterceptor } from '../../interceptors';

@Controller('artist')
export class ArtistController {

    constructor(private artistService: ArtistService) { }

    @Get(':id')
    findArtistById(@Param('id') artistId: string) {
        return this.artistService.findById(artistId)
    }

    @Post()
    createArtist(@Body() body: CreateArtistDto) {
        return this.artistService.create(body);
    }

    @UseInterceptors(PaginationInterceptor)
    @Get()
    findArtistsByName(@Query() query: FindArtistsByNameDto) {
        return this.artistService.findArtistsByName(query);
    }

    @Put(':id')
    updateArtistById(
        @Param('id') artistId: string,
        @Body() body: UpdateArtistDto,
    ) {
        return this.artistService.update(artistId, body);
    }

}