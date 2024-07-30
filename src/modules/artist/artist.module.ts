import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { Artist } from './artist.entity';
import { ArtistResolver } from './artist.resolver';
import { DateScalar } from 'src/common/graphql/scalar';

@Module({
    imports: [TypeOrmModule.forFeature([Artist])],
    controllers: [ArtistController],
    providers: [
        ArtistService,
        ArtistResolver,
        DateScalar,
    ],
    exports: [ArtistService],
})
export class ArtistModule { }