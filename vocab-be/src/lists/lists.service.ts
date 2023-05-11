import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

let id = 1;

@Injectable()
export class ListsService {
  private lists = [
    {
      id: 0,
      name: 'Last lesson',
      coverImageUrl:
        'https://educationsupporthub.co.uk/wp-content/uploads/2020/09/vocabulary-1024x683.jpg',
      words: [
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
      ],
    },
  ];
  create(createListDto: CreateListDto) {
    const list = {
      id: id++,
      ...createListDto,
    };
    this.lists.push(list);
    return list;
  }

  findAll() {
    return this.lists;
  }

  findOne(id: number) {
    const list = this.lists.find((l) => l.id === id);
    return list;
  }

  update(id: number, updateListDto: UpdateListDto) {
    const listIndex = this.lists.findIndex((l) => l.id === id);
    this.lists[listIndex] = {
      ...this.lists[listIndex],
      ...updateListDto,
    };
    return this.lists[listIndex];
  }

  remove(id: number) {
    const listIndex = this.lists.findIndex((l) => l.id === id);
    this.lists.splice(listIndex);
    return this.lists;
  }
}
