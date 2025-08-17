import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../modules/user/user.entity';
import { Artist, ArtistSchema } from '../../modules/artist/artist.entity';
import { UserRepository } from './user.repository';
import { ArtistRepository } from './artist.repository';
import { SongRepository } from './song.repository';
import { Song, SongSchema } from '../../modules/song/song.entity';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Artist.name, schema: ArtistSchema },
            { name: Song.name, schema: SongSchema },
        ])
    ],
    providers: [
        UserRepository,
        ArtistRepository,
        SongRepository,
    ],
    exports: [
        UserRepository,
    ]
})
export class RepositoryModule { }