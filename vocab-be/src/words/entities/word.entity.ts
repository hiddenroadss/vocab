import { List } from 'src/lists/entities/list.entity';
import { Word as WordPrisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class Word implements WordPrisma {
  @ApiProperty()
  id: number;

  @ApiProperty()
  text: string;

  @ApiProperty()
  meaning: string;

  @ApiProperty()
  lists: List[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
