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
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Paginated } from 'src/common/types';
import { Artist } from './artist.entity';

@ApiTags('artist')
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

    @ApiResponse({type: () => Paginated(Artist)})
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