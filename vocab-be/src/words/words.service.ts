import { Injectable } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';

let id = 2;

@Injectable()
export class WordsService {
  private words = [
    {
      id: 0,
      text: 'fall flat',
      meaning: 'to not be funny or entertaining',
    },
    {
      id: 1,
      text: 'eternity',
      meaning: 'time that never ends or that has no limits',
    },
  ];
  create(createWordDto: CreateWordDto) {
    const word = {
      id: id++,
      ...createWordDto,
    };
    this.words.push(word);
    return word;
  }

  findAll() {
    return this.words;
  }

  findOne(id: number) {
    const word = this.words.find((w) => w.id === id);
    return word;
  }

  update(id: number, updateWordDto: UpdateWordDto) {
    const wordIndex = this.words.findIndex((w) => w.id === id);
    this.words[wordIndex] = {
      ...this.words[wordIndex],
      ...updateWordDto,
    };
    return this.words[wordIndex];
  }

  remove(id: number) {
    const wordIndex = this.words.findIndex((w) => w.id === id);
    this.words.splice(wordIndex);
    return this.words;
  }
}
