import { Music } from '../interfaces/musics';
import { Singer } from '../interfaces/singer';

export function NewSinger(): Singer {
  return {
    id: '',
    name: '',
    imageUrl: '',
    followers: 0,
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
    title: '',
  };
}
