import { Music } from './musics';

export interface Singer {
  id: string;
  name: string;
  imageUrl: string;
  followers: number;
  musics?: Music[];
}
