import { Controller, Get, Header, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Readable } from 'stream';

@Controller('file')
export class FileController {
    // stream from file
    @Get('readme')
    getReadMe() {
        const file = createReadStream(join(process.cwd(), 'README.md'));
        return new StreamableFile(file, {
            disposition: 'attachment; filename="README.md"'
        })
    }

    // stream from buffer
    @Get('songs')
    @Header('Content-Type', 'text/csv')
    @Header('Content-Disposition', 'attachment; filename="songs.csv"')
    getSongs() {
        const songs = [
            ['Title', 'Artist'],
            ['Akatsuki no Ito', 'Wagakki Band'],
        ]
        const csvString = songs.map(row => row.join(',')).join('\n')
        const file = Readable.from([csvString])
        return new StreamableFile(file)
    }
}
