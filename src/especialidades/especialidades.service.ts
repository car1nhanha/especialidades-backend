import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';
import { Especialidade } from './entities/especialidade.entity';

@Injectable()
export class EspecialidadesService {
  constructor(
    @InjectModel('Especialidade')
    private especialidadeModel: Model<Especialidade>,
  ) {}

  create(createEspecialidadeDto: CreateEspecialidadeDto) {
    try {
      return this.especialidadeModel.create(createEspecialidadeDto);
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    try {
      return this.especialidadeModel.find();
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: string) {
    try {
      return this.especialidadeModel.findById(id).populate('area').exec();
    } catch (error) {
      console.log(error);
    }
  }

  update(id: string, updateEspecialidadeDto: UpdateEspecialidadeDto) {
    try {
      return this.especialidadeModel
        .findByIdAndUpdate(id, updateEspecialidadeDto)
        .exec();
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: string) {
    try {
      return this.especialidadeModel.findByIdAndDelete(id).exec();
    } catch (error) {
      console.log(error);
    }
  }
}
