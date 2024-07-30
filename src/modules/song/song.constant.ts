import { registerEnumType } from '@nestjs/graphql';

export enum SongRecordType {
    Studio = 'studio',
    Live = 'live',
    FanRecord = 'fan record',
}

registerEnumType(SongRecordType, { name: 'SongRecordType' });