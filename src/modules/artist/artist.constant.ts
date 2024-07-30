import { registerEnumType } from '@nestjs/graphql';

export enum ArtistGender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
}

registerEnumType(ArtistGender, { name: 'ArtistGender' });