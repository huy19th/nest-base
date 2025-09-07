import { Injectable, Logger } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { SlackSendToChannelIdResponse, SlackChannelsResponse } from "./slack.type";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class SlackService {
    protected axios: AxiosInstance
    private readonly logger = new Logger(SlackService.name);

    constructor(private readonly configService: ConfigService) {
        this.axios = axios.create({
            headers: {
                Authorization: `Bearer ${this.configService.get('slack.bot_token')}`
            }
        })
    }

    private handleError(error: any) {
        if (error.response) {
            this.logger.error(error.response.data);
        } else if (error.request) {
            this.logger.error(error.request);
        } else {
            this.logger.error(error.message);
        }
    }

    // require Incoming Webhooks setup instead of scopes
    async sendMessageByChannelUrl(webhookUrl: string, message: string): Promise<string | undefined> {
        try {
            const { data } = await axios.post(webhookUrl, { text: message })
            return data
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * Scopes required:
     * - chat:write.public: Send message to channels the bot isn't a member of
     * - chat:write: Send message as bot
     * 
     * visit a channel & you see channel url: https://app.slack.com/client/WORKSPACE_ID/CHANNEL_ID
     * => CHANNEL_ID is @param channelId
     */
    async sendMessageByChannelId(channelId: string, message: string): Promise<SlackSendToChannelIdResponse | undefined> {
        try {
            const { data } = await this.axios.post(this.configService.get('slack.send_message_url') as string, {
                channel: channelId,
                text: message,
            })
            return data
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * Get the list of Slack channels.
     * Scopes required:
     * - channels:read: View basic information about public channels in a workspace
     * @returns The response containing the list of channels.
     */
    async getChannels(): Promise<SlackChannelsResponse | undefined> {
        try {
            const { data } = await this.axios.get(this.configService.get('slack.get_channels_url') as string)
            return data
        } catch (error) {
            this.handleError(error);
        }
    }
}
