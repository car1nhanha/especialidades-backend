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
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';
import { EspecialidadesService } from './especialidades.service';

@Controller('especialidades')
@ApiTags('especialidades')
export class EspecialidadesController {
  constructor(private readonly especialidadesService: EspecialidadesService) {}

  @Post()
  create(@Body() createEspecialidadeDto: CreateEspecialidadeDto) {
    return this.especialidadesService.create(createEspecialidadeDto);
  }

  @Get()
  findAll() {
    return this.especialidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.especialidadesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEspecialidadeDto: UpdateEspecialidadeDto,
  ) {
    return this.especialidadesService.update(id, updateEspecialidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.especialidadesService.remove(id);
  }
}
