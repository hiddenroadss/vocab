import { Word } from './word.model';

export type List = {
  id: number;
  name: string;
  coverImageUrl: string;
  words: Word[];
};
