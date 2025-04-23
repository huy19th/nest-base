## Intro
* NestJS project code base
* Each feature is stored in a branch

## Init
* `npm i -g @nestjs/cli`
* `nest new project-name`
* `npm i class-validator class-transformer`

## Biome
* `npm i -D @biomejs/biome`
* [Config using biome.json](https://biomejs.dev/reference/configuration/)

### Linting & formatting
* Check the lint errors and warning: `npm run lint`
* Format the code and fix the lint errors and warning: `npm run lint:fix`
* `biome` extension is configured to install automatically & used as default formatter

### Migration
* Uninstall ESLint & Prettier
```
npm un @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier prettier
```
* From ESLint
```
npx @biomejs/biome migrate eslint --write
```
* From Prettier
```
npx @biomejs/biome migrate eslint --write --include-inspired
```

### husky & lint-staged
* [Instructions](https://biomejs.dev/recipes/git-hooks/)
* `npm i -D husky lint-staged`
* `npx husky init`
* this example will run use biome to lint code before commit
