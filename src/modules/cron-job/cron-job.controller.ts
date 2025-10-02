import { Controller, Get } from "@nestjs/common";
import { CronJobService } from "./cron-job.service";

@Controller('cron-job')
export class CronJobController {
    constructor(private readonly cronJobService: CronJobService) { }

    @Get('cron-job')
    getListCronJobs() {
        return
    }
}