import { Injectable } from '@nestjs/common';
import { ArtistRepository } from './artist.repository';
import { FindArtistsByNameDto } from './artist.dto';
import { BaseService } from 'src/common/base';
import { Artist } from './artist.entity';

@Injectable()
export class ArtistService extends BaseService<Artist> {
    constructor(
        protected readonly artistRepository: ArtistRepository,
    ) {
        super(artistRepository)
    }

    findByName(dto: FindArtistsByNameDto) {
        return this.artistRepository.findByName(dto)
    }
}