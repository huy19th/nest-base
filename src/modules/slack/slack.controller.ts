import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SlackService } from './slack.service';

@Controller('slack')
export class SlackController {
    constructor(private readonly slackService: SlackService) { }

    @Get('channels')
    getChannels() {
        return this.slackService.getChannels();
    }

    @Post('messages')
    sendMessageByChannelUrl(
        @Body('url') channelUrl: string,
        @Body('message') message: string,
    ) {
        return this.slackService.sendMessageByChannelUrl(channelUrl, message);
    }

    @Post('channel/:id/messages')
    sendMessageByChannelId(
        @Param('id') chanelId: string,
        @Body('message') message: string,
    ) {
        return this.slackService.sendMessageByChannelId(chanelId, message);
    }
}
