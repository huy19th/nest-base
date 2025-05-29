import { registerEnumType } from '@nestjs/graphql';

export enum SongRecordType {
    Studio = 'Studio',
    Live = 'Live',
    FanRecord = 'FanRecord',
}

registerEnumType(SongRecordType, { name: 'SongRecordType' })