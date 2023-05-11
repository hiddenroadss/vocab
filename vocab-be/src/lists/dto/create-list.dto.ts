import { Word } from 'src/words/entities/word.entity';

export class CreateListDto {
  name: string;
  coverImageUrl: string;
  words: Word[];
}
