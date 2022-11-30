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
import { CreateRespostaDto } from './dto/create-resposta.dto';
import { UpdateRespostaDto } from './dto/update-resposta.dto';
import { RespostasService } from './respostas.service';

@Controller('respostas')
@ApiTags('respostas')
export class RespostasController {
  constructor(private readonly respostasService: RespostasService) {}

  @Post()
  create(@Body() createRespostaDto: CreateRespostaDto) {
    return this.respostasService.create(createRespostaDto);
  }

  @Get()
  findAll() {
    return this.respostasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.respostasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRespostaDto: UpdateRespostaDto,
  ) {
    return this.respostasService.update(id, updateRespostaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.respostasService.remove(id);
  }
}
