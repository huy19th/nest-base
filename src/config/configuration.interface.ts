export interface Configuration {
    port: number;
    nodemailer: {
        user: string;
        pass: string;
        host: string;
        port: number;
    };
}