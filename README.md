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

## TypeORM
* Install `typeorm` & database driver  
`npm i @nestjs/typeorm typeorm pg`
* Auto generate migration file  
`npm run migration:generate --name=<migration_name>`
* Create blank migration file  
`npm run migration:create --name=<migration_name>`
* Run all migrations  
`npm run migration:up`
* Revert latest migration  
`npm run migration:down`

## pg_cron
* [Github](https://github.com/citusdata/pg_cron)
* [Setup Guide](https://dev.to/shrsv/supercharge-your-postgres-docker-setup-with-extensions-3leh)
