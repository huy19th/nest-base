import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import { BaseRepository } from 'src/common/base';
import { Artist } from './artist.entity';
import { FindArtistsByNameDto } from './artist.dto';

@Injectable()
export class ArtistRepository extends BaseRepository<Artist> {
    constructor(
        @InjectRepository(Artist)
        protected readonly artistRepository: Repository<Artist>
    ) {
        super(artistRepository)
    }

    findByName(dto: FindArtistsByNameDto) {
        const queryOptions: FindManyOptions<Artist> = {
            order: { name: 'ASC' },
            skip: (dto.page - 1) * dto.limit,
            take: dto.limit,
        }
        if (dto.name) queryOptions.where = { name: ILike(`%${dto.name}%`) }
        return this.artistRepository.findAndCount(queryOptions)
    }
}