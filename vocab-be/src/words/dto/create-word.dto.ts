import { ApiProperty } from '@nestjs/swagger';

export class CreateWordDto {
  @ApiProperty()
  text: string;

  @ApiProperty()
  meaning: string;
}
