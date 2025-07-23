import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { Queues } from '../../config/bull.config';
import { AudioController } from './audio.controller';
import { AudioProcessor } from './audio.processor';

@Module({
    imports: [
        BullModule.registerQueue({
            name: Queues.Audio,
            // allow overiding BullModule.forRoot
            // connection: {
            //     port: 6380,
            // },
        }),
    ],
    controllers: [AudioController],
    providers: [AudioProcessor],
})
export class AudioModule { }