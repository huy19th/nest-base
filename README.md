## Intro
* NestJS project code base
* Each feature is stored in a branch

## Init
* `npm i -g @nestjs/cli`
* `nest new project-name`
* `npm i class-validator class-transformer`

## Cron Jobs
* `npm i @nestjs/schedule`
* Cron pattern explained:
```cmd
* * * * * *
| | | | | |
| | | | | day of week
| | | | months
| | | day of month
| | hours
| minutes
seconds (optional)
```
* Cron pattern example:
  * `* * * * * *` : every second
  * `45 * * * * *` : every minute, on the 45th second
  * `0 10 * * * *` : every hour, at the start of the 10th minute
  * `0 */30 9-17 * * *` : every 30 minutes between 9am and 5pm
  * `0 30 11 * * 1-5` : Monday to Friday at 11:30am
* Cron maker
  * [cronmaker](http://www.cronmaker.com/)
  * [crontab](https://crontab.cronhub.io/)
