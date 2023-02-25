export interface Music {
  id: string;
  title: string;
  singer: {
    id: string;
    name: string;
  }[];
  album: {
    id: string;
    name: string;
    imageUrl: string;
  };
  time: string;
}
