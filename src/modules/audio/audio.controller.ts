import { Controller, Post } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { Queues } from '../../config/bull.config';
import { AudioJob } from './audio.constant';

@Controller('audio')
export class AudioController {
    
    constructor(@InjectQueue(Queues.Audio) private audioQueue: Queue) { }

    @Post('transcode')
    transcode() {
        this.audioQueue.add(AudioJob.Transcode, 'transcode-audio')
    }
}