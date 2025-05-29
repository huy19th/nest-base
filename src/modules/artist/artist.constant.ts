import { registerEnumType } from '@nestjs/graphql';

export enum ArtistGender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}

registerEnumType(ArtistGender, { name: 'ArtistGender' })