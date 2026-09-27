export interface Game {
  image: string;
  title: string;
  description: string;
  category: string;
  price: string;
  playersType: string;
  duration: string;
  meta: {
    rating: number;
    likes: number;
  };
  recorders: Recorder[];
  comments: Comment[];
}

export interface Recorder {
  id: number;
  name: string;
  point: number;
  history: string;
}

export interface Comment {
  meta: {
    author: string;
    date: string;
  };
  body: string;
  likes: number;
}
