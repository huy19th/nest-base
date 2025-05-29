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

## GraphQL
* Install   
`npm i @apollo/server @nestjs/apollo @nestjs/graphql graphql`
* Endpoint  
`localhost:1000/graphql`
* Selected fields   
`npm i graphql-fields`
