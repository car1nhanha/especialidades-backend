import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRespostaDto } from './dto/create-resposta.dto';
import { UpdateRespostaDto } from './dto/update-resposta.dto';
import { Resposta, RespostaDocument } from './entities/resposta.entity';

@Injectable()
export class RespostasService {
  constructor(
    @InjectModel(Resposta.name) private respostaModel: Model<RespostaDocument>,
  ) {}

  create(createRespostaDto: CreateRespostaDto) {
    try {
      console.log(createRespostaDto);

      // pegar a pergunta
      // const pergunta = this.perguntaModel.findById(
      //   createRespostaDto.perguntaId,
      // );

      // console.log(pergunta);

      return 'success';
      // return this.respostaModel.create(createRespostaDto);
    } catch (error) {
      return error;
    }
  }

  findAll() {
    try {
      return this.respostaModel.find();
    } catch (error) {
      return error;
    }
  }

  findOne(id: string) {
    try {
      return this.respostaModel.findById(id);
    } catch (error) {
      return error;
    }
  }

  update(id: string, updateRespostaDto: UpdateRespostaDto) {
    try {
      return this.respostaModel.findByIdAndUpdate(id, updateRespostaDto).exec();
    } catch (error) {
      return error;
    }
  }

  remove(id: string) {
    try {
      return this.respostaModel.findByIdAndDelete(id).exec();
    } catch (error) {
      return error;
    }
  }
}
