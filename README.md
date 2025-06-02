## Intro
* NestJS project code base
* Each feature is stored in a branch

## Init
* `npm i -g @nestjs/cli`
* `nest new project-name`
* `npm i class-validator class-transformer`

## Serve static
* `npm i @nestjs/serve-static`
* Use case:
  * Serve static for SPA
  * Apply custom logic when serve static
* NOTE: if you need to prevent unauthenticated download, uncomment AuthMiddleware in `app.module.ts`
