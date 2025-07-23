import { BullRootModuleOptions, SharedBullConfigurationFactory } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RepeatOptions } from 'bullmq';

@Injectable()
export class BullConfig implements SharedBullConfigurationFactory {
    constructor(private readonly config: ConfigService) { }

    createSharedConfiguration(): Promise<BullRootModuleOptions> | BullRootModuleOptions {
        return {
            // BASE OPTIONS
            connection: {
                host: this.config.get('bullmq.host'),
                port: this.config.get('bullmq.port'),
            },
            prefix: this.config.get('bullmq.key_prefix'), // prefix for all queue keys
            // telemetry: Telemetry // Telemetry client

            // DEFAULT JOB OPTIONS
            defaultJobOptions: {
                priority: 1, // default 0, should not use due to sligt impact on performance
                delay: 100, // default 0, number of ms wait til job an be processed
                attempts: 2, // default 0, number of retry until job completes,
                // backoff: {} // retry strategy
                lifo: false, // default false, will process newer job first if true,
                removeOnComplete: true,
                removeOnFail: {
                    age: 24 * 60 * 60, // Maximum age in seconds for job to be kept
                    count: 100, // Maximum count of jobs to be kept
                },
                keepLogs: 1000, // Maximum amount of log entries that will be preserved,
                stackTraceLimit: 50, // Limits the amount of stack trace lines that will be recorded in the stacktrace.
                sizeLimit: 1024, // Limits the size in bytes of the job's data payload (as a JSON serialized string).
            },

            // STREAM OPTIONS USED INTERNALLY BY BULLMQ
            streams: {
                events: {
                    maxLen: 1000, // Max approximated length for streams. Default is 10 000 events.
                },
            },

            // REPEATABLE JOBS OPTIONS
            settings: {
                repeatStrategy: (millis: number, opts: RepeatOptions, name?: string) => {
                    return 10
                },
                repeatKeyHashAlgorithm: 'md5',  // A hash algorithm to be used when trying to create the job redis key, default is md5
            },
        }
    }
}

export enum Queues {
    Audio = 'Audio'
}