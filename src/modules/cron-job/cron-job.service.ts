import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { Cron, CronExpression, Interval, SchedulerRegistry, Timeout } from "@nestjs/schedule";
import { CronJob } from 'cron';

@Injectable()
export class CronJobService implements OnModuleInit {
    private readonly logger = new Logger(CronJobService.name);

    constructor(private schedulerRegistry: SchedulerRegistry) { }

    onModuleInit() {
        setTimeout(() => {
            console.log('==========List Cron Jobs==========', this.schedulerRegistry.getCronJobs());
            console.log('==========List Intervals==========', this.schedulerRegistry.getIntervals());
        })
        setTimeout(() => this.schedulerRegistry.deleteInterval('NotifyEvery10s'), 1000 * 20);
        this.schedulerRegistry.addInterval(
            'NotifyEvery30s',
            setInterval(() => this.handleInterval2(), 1000 * 30)
        );
        this.schedulerRegistry.addCronJob(
            'notifications2',
            new CronJob(
                '10 * * * * *',
                () => { this.handleCron2() }
            )
        )
    }

    @Cron(
        '5 * * * * *',
        {
            name: 'notifications', // declare name to help you to manage the cron job dynamically
            /**
             * No additional instances of cronjob will run until the current onTick callback has completed.
             * Any new scheduled executions that occur while the current cronjob is running will be skipped entirely.
             */
            waitForCompletion: false,
            
        }
    )
    handleCron() {
        this.logger.debug('Called when the second is 5');
    }

    @Interval(
        'NotifyEvery10s',
        10000
    ) // milliseconds
    // @Cron(CronExpression.EVERY_10_SECONDS) - alternative to using Interval
    handleInterval() {
        this.logger.debug('Called every 10 seconds');
    }

    @Timeout(5000)
    handleTimeout() {
        this.logger.debug('Called once after 5 seconds');
    }

    handleInterval2() {
        this.logger.debug('Called every 30 seconds')
    }

    handleCron2() {
        this.logger.debug('Called when the second is 10');
    }
}
