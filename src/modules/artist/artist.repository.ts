import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/base';
import { Artist } from './artist.entity';
import { FindArtistsByNameDto } from './artist.dto';

@Injectable()
export class ArtistRepository extends BaseRepository<Artist> {
    constructor(protected readonly artistRepository: any) {
        super(artistRepository)
    }

    findByName(dto: FindArtistsByNameDto) {
    }
}