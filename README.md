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

## Swagger
* Install swagger   
`npm i @nestjs/swagger`
* DTO convention
  * Optional field: add `?` after property
  * Required field: default
  * Default value: just add default value like normal class
* Swagger not auto generating schema ? Make sure to add file prefix to `nest-cli.json`
* Import `swagger.json` to postman
  * Click `Import` on top of sidebar
  * Drag & drop `swagger.json`
  * Select option `OpenAPI`
