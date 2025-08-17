import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { ArtistRepository } from './artist.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Artist, ArtistSchema } from './artist.entity';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Artist.name, schema: ArtistSchema }
        ])
    ],
    controllers: [ArtistController],
    providers: [ArtistService, ArtistRepository],
    exports: [ArtistService, ArtistRepository],
})
export class ArtistModule { }