import { Injectable } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WordsService {
  constructor(private prisma: PrismaService) {}

  create(createWordDto: CreateWordDto) {
    return this.prisma.word.create({ data: createWordDto });
  }

  findAll(page = 1, limit = 10) {
    const skipIndex = (page - 1) * limit;
    return this.prisma.word.findMany({
      skip: skipIndex,
      take: limit,
    });
  }

  findOne(id: number) {
    return this.prisma.word.findUnique({ where: { id } });
  }

  update(id: number, updateWordDto: UpdateWordDto) {
    return this.prisma.word.update({
      where: { id },
      data: updateWordDto,
    });
  }

  remove(id: number) {
    return this.prisma.word.delete({
      where: { id },
    });
  }
}
