import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateWordDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  text: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(300)
  @ApiProperty()
  meaning: string;
}
