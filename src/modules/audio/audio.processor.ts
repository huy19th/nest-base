import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Queues } from '../../config/bull.config';
import { Job } from 'bullmq';
import { AudioJob } from './audio.constant';

@Processor(Queues.Audio)
export class AudioProcessor extends WorkerHost {
    async process(job: Job<any, any, string>): Promise<any> {
        console.log(job.name, job.data)
        this[job.name](job.data)
    }

    [AudioJob.Transcode](data: any) {
        console.log({job: AudioJob.Transcode, data})
    }
}