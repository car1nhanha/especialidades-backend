import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePerguntaDto } from './dto/create-pergunta.dto';
import { UpdatePerguntaDto } from './dto/update-pergunta.dto';
import { PerguntasService } from './perguntas.service';

@Controller('perguntas')
@ApiTags('Perguntas')
export class PerguntasController {
  constructor(private readonly perguntasService: PerguntasService) {}

  @Post()
  create(@Body() createPerguntaDto: CreatePerguntaDto) {
    return this.perguntasService.create(createPerguntaDto);
  }

  @Get()
  findAll() {
    return this.perguntasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perguntasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePerguntaDto: UpdatePerguntaDto,
  ) {
    return this.perguntasService.update(id, updatePerguntaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perguntasService.remove(id);
  }
}
