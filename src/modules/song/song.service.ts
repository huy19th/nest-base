import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { SongRepository } from './song.repository';
import { CreateSongDto, FindArtistSongsDto, FindSongsByTitleDto, UpdateSongByIdDto } from './song.dto';
import { BaseService } from 'src/common/base';
import { Song } from './song.entity';
import { PaginationOptions } from '../../common/dtos';
import { Artist } from '../artist/artist.entity';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { FileUpload } from 'graphql-upload-ts';
import { join } from 'path';
import { finished } from 'stream';

@Injectable()
export class SongService extends BaseService<Song> {
    protected uploadDir: string = join(process.cwd(), 'upload')
    constructor(
        protected readonly songRepository: SongRepository
    ) {
        super(songRepository)
        if (!existsSync(this.uploadDir)) {
            mkdirSync(this.uploadDir, { recursive: true });
        }
    }

    createSong(dto: CreateSongDto) {
        return this.songRepository.createSong(dto)
    }

    async updateSong(songId: string, { artistIds, ...data }: UpdateSongByIdDto) {
        let song = await this.findById(songId);
        if (!song) throw new NotFoundException();
        Object.assign(song, { ...data, artists: artistIds.map(id => ({ id }) as Artist) });
        return song.save();
    }

    findMany(dto: FindSongsByTitleDto) {
        return this.songRepository.findMany(dto)
    }

    findArtistSongs(artistId: string, dto: FindArtistSongsDto, pagination: PaginationOptions) {
        return this.songRepository.findArtistSongs(artistId, dto, pagination)
    }

    async saveSongs(files: FileUpload | FileUpload[]): Promise<string[]> {
        const now = Date.now()
        files = Array.isArray(files) ? files : [files]
        const filenames: string[] = []
        for await (const file of files) {
            file.filename = `${now}-${file.filename}`
            const readStream = file.createReadStream()
            // convert file to buffer in memory instead of saving file to disk
            // const chunks: Buffer[] = [];
            // for await (const chunk of readStream) {
            //     chunks.push(chunk);
            // }
            // const buffer = Buffer.concat(chunks);
            const path = join(this.uploadDir, file.filename)
            const writeStream = createWriteStream(path)
            readStream.pipe(writeStream)

            const savedFile = await new Promise((resolve, _reject) => {
                finished(writeStream, err => {
                    if (err) {
                        console.log(err)
                        console.log('finished', err)
                        return resolve(null)
                    }
                    resolve({
                        ...file,
                        path,
                    })
                })
            })
            console.log('Saved', savedFile)
            if (!savedFile) {
                throw new InternalServerErrorException()
            }
            filenames.push(file.filename)
        }

        return filenames
    }
}