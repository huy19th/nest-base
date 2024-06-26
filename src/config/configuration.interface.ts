export interface Configuration {
    port: number;
    sms: {
        apiKey: string;
        url: string;
        from: string;
    }
}