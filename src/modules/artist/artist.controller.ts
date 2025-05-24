import {
    Controller,
    Get,
    Post,
    Put,
    Param,
    Body,
    Query,
    UseInterceptors,
    Delete,
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
    
    constructor(private readonly artistService: ArtistService) { }

    @Post() // explicitly define route to apply validation or override extend route
    create(@Body() body: CreateArtistDto) {
        return this.artistService.create(body)
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.artistService.findById(id)
    }

    @UseInterceptors(PaginationInterceptor)
    @Get()
    findByName(@Query() query: FindArtistsByNameDto) {
        return this.artistService.findByName(query)
    }

    @Put(':id') // explicitly define route to apply validation or override extend route
    update(
        @Param('id') artistId: string,
        @Body() body: UpdateArtistDto,
    ) {
        return this.artistService.update(artistId, body)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.artistService.delete(id)
    }

}