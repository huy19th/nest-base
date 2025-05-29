import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { ArtistRepository } from './artist.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from './artist.entity';
import { ArtistResolver } from './artist.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Artist])],
    controllers: [ArtistController],
    providers: [ArtistService, ArtistRepository, ArtistResolver],
    exports: [ArtistService, ArtistRepository],
})
export class ArtistModule { }