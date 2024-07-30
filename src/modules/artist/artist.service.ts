import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from './artist.entity';
import { BaseService } from '../../common/base/base.service';
import { FindArtistsByNameDto } from './artist.dto';

@Injectable()
export class ArtistService extends BaseService<Artist> {

    constructor(
        @InjectRepository(Artist) repository: Repository<Artist>,
    ) {
        super(repository);
    }

    findArtistsByName({ name, page, limit }: FindArtistsByNameDto) {
        return this.repository.createQueryBuilder('artist')
            .where('lower(artist.name) like :name', { name: `${name.toLocaleLowerCase()}%` })
            .skip((page - 1) * limit)
            .take(limit)
            .getManyAndCount();
    }

}