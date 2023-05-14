import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { List } from './entities/list.entity';

@Controller('lists')
@ApiTags('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  @ApiCreatedResponse({ type: List })
  create(@Body() createListDto: CreateListDto) {
    return this.listsService.create(createListDto);
  }

  @Get()
  @ApiOkResponse({ type: List, isArray: true })
  findAll() {
    return this.listsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: List })
  findOne(@Param('id') id: string) {
    return this.listsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: List })
  update(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
    return this.listsService.update(+id, updateListDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: List })
  remove(@Param('id') id: string) {
    return this.listsService.remove(+id);
  }
}
