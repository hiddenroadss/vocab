import { ApiProperty } from '@nestjs/swagger';

export class CreateListDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  coverImageUrl: string;

  @ApiProperty()
  wordIds: number[];
}
