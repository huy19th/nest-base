## Intro
* NestJS project code base
* Each feature is stored in a branch

## Init
* `npm i -g @nestjs/cli`
* `nest new project-name`
* `npm i class-validator class-transformer`

## Config
* `npm i @nestjs/config`

## Database
* `docker compose up -d`

## Mongoose
* `npm i @nestjs/mongoose`
* Indexes can be synced via the following ways:
  * Run `syncIndexes` in `app.module.ts` every start up
