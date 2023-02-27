import { Music } from './musics';

export interface Playlist {
  id: string;
  name: string;
  image: string;
  musics?: Music[];
}
