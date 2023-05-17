import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ListsService {
  constructor(private prisma: PrismaService) {}
  create(createListDto: CreateListDto) {
    const { wordIds, ...listData } = createListDto;

    return this.prisma.list.create({
      data: {
        ...listData,
        words: wordIds
          ? {
              connect: wordIds.map((id) => ({ id })),
            }
          : undefined,
      },
    });
  }

  findAll() {
    return this.prisma.list.findMany({
      include: {
        words: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.list.findUnique({
      where: { id },
      include: {
        words: true,
      },
    });
  }

  update(id: number, updateListDto: UpdateListDto) {
    const { wordIds, ...listData } = updateListDto;

    return this.prisma.list.update({
      where: { id },
      data: {
        ...listData,
        words: wordIds
          ? {
              connect: wordIds.map((id) => ({ id })),
            }
          : undefined,
      },
    });
  }

  remove(id: number) {
    return this.prisma.list.delete({ where: { id } });
  }
}
