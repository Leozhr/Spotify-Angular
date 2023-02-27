import { Music } from '../interfaces/musics';
import { Playlist } from '../interfaces/playlist';
import { Singer } from '../interfaces/singer';

export function NewSinger(): Singer {
  return {
    id: '',
    name: '',
    imageUrl: '',
    followers: 0,
    musics: [],
  };
}

export function NewPlaylist(): Playlist {
  return {
    id: '',
    name: '',
    image: '',
    musics: [],
  };
}

export function newMusic(): Music {
  return {
    id: '',
    album: {
      id: '',
      imageUrl: '',
      name: '',
    },
    singer: [],
    time: '',
    timeMs: 0,
    title: '',
  };
}
