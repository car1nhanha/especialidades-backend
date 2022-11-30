import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePerguntaDto } from './dto/create-pergunta.dto';
import { UpdatePerguntaDto } from './dto/update-pergunta.dto';
import { Pergunta, PerguntaDocument } from './entities/pergunta.entity';

@Injectable()
export class PerguntasService {
  constructor(
    @InjectModel(Pergunta.name) private userModel: Model<PerguntaDocument>,
  ) {}

  create(createPerguntaDto: CreatePerguntaDto) {
    try {
      return this.userModel.create(createPerguntaDto);
    } catch (error) {
      return error;
    }
  }

  findAll() {
    try {
      return this.userModel.find();
    } catch (error) {
      return error;
    }
  }

  findOne(id: string) {
    try {
      return this.userModel.findById(id).populate('especialidade').exec();
    } catch (error) {
      return error;
    }
  }

  update(id: string, updatePerguntaDto: UpdatePerguntaDto) {
    try {
      return this.userModel.findByIdAndUpdate(id, updatePerguntaDto).exec();
    } catch (error) {
      return error;
    }
  }

  remove(id: string) {
    try {
      return this.userModel.findByIdAndDelete(id).exec();
    } catch (error) {
      return error;
    }
  }
}
