import { Injectable } from '@nestjs/common';
import * as AVAILABLE_SONG_DATA from '../data/songs.json';

@Injectable()
export class SongService {
    getAllSongs(): object {
        return AVAILABLE_SONG_DATA;
    }

    search(query: string) {
        let songs = AVAILABLE_SONG_DATA.data;

        let matchedSongs = [];

       songs.forEach((song) => {
         if (song.artist.toLowerCase().includes(query)
             || song.title.toLowerCase().includes(query)
         ) {
             matchedSongs.push(song);
         }
       })

        return {
           'total': matchedSongs.length,
            'data': matchedSongs
        };
    }
}
