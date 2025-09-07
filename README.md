## Intro
* NestJS project code base
* Each feature is stored in a branch

## Init
* `npm i -g @nestjs/cli`
* `nest new project-name`
* `npm i class-validator class-transformer`

## Config
* `npm i @nestjs/config`

## Slack
1. Install axios: `npm i axios`
2. Setup
* [Quickstart | Slack Developers Docs](https://docs.slack.dev/quickstart)

* Required Steps:
  * [1. Creating an app](https://docs.slack.dev/quickstart#creating)
  * [3. Installing and authorizing the app](https://docs.slack.dev/quickstart#installing)

* Optional Setup:
  * [Sending a message with a webhook](https://docs.slack.dev/quickstart#webhooks) (Need to set up webhook for each channel)
  * [Sending a message to channel by channel ID](https://docs.slack.dev/messaging/sending-and-scheduling-messages) (1 time set up required scopes, can send to any channel)
