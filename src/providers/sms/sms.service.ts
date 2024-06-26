import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class SmsService {
    url: string;
    apiKey: string;
    from: string;
    constructor(private configService: ConfigService) {
        this.url = this.configService.get<string>('sms.url');
        this.apiKey = this.configService.get<string>('sms.apiKey');
        this.from = this.configService.get<string>('sms.from');
    }

    send(content: string, phoneNumber: string): Promise<any> {
        return axios.post(
            this.url,
            {
                content,
                from: this.from,
                to: phoneNumber,
            },
            {
                headers: {
                    'x-api-key': this.apiKey,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
    }
}
