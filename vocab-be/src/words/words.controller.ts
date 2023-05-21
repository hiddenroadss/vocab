import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { WordsService } from './words.service';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Word } from './entities/word.entity';

@Controller('words')
@ApiTags('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post()
  @ApiCreatedResponse({ type: Word })
  create(@Body() createWordDto: CreateWordDto) {
    return this.wordsService.create(createWordDto);
  }

  @Get()
  @ApiOkResponse({ type: Word, isArray: true })
  findAll(@Query('page') page: string, @Query('limit') limit: string) {
    let pageInt = parseInt(page);
    let limitInt = parseInt(limit);
    if (isNaN(pageInt)) pageInt = 1;
    if (isNaN(limitInt)) limitInt = 10;
    return this.wordsService.findAll(pageInt, limitInt);
  }

  @Get(':id')
  @ApiOkResponse({ type: Word })
  findOne(@Param('id') id: string) {
    return this.wordsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Word })
  update(@Param('id') id: string, @Body() updateWordDto: UpdateWordDto) {
    return this.wordsService.update(+id, updateWordDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Word })
  remove(@Param('id') id: string) {
    return this.wordsService.remove(+id);
  }
}
