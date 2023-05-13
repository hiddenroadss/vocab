import { Word } from './word.model';

export type Question = {
  word: Word;
  choices: string[];
};
