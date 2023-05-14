import { ApiProperty } from '@nestjs/swagger';
import { List as ListPrisma } from '@prisma/client';

export class List implements ListPrisma {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  coverImageUrl: string;

  @ApiProperty()
  wordIds: number[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
