import { Word } from 'src/words/entities/word.entity';

export class List {
  id: number;
  name: string;
  coverImageUrl: string;
  words: Word[];
}
