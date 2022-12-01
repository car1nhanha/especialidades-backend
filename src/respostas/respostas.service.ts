import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PerguntasService } from 'src/perguntas/perguntas.service';
import { CreateRespostaDto } from './dto/create-resposta.dto';
import { UpdateRespostaDto } from './dto/update-resposta.dto';
import { Resposta, RespostaDocument } from './entities/resposta.entity';

@Injectable()
export class RespostasService {
  constructor(
    @InjectModel(Resposta.name) private respostaModel: Model<RespostaDocument>,
    @Inject(PerguntasService)
    private readonly perguntaService: PerguntasService,
  ) {}

  async create(createRespostaDto: CreateRespostaDto) {
    try {
      const user = '63873dca20617bca87c94f8e'; // pegar do token
      const { perguntaId, resposta } = createRespostaDto;

      if (!perguntaId) throw new Error('Pergunta não informada');

      const pergunta = await this.perguntaService.findOne(`${perguntaId}`);
      if (!pergunta) throw new Error('Pergunta não encontrada');

      // verificar se a resposta está correta
      const validation = pergunta.questoes.map((questao, index) => {
        if (!questao.autoCorrecao) return null;
        if (questao.resposta === resposta[index].resposta) return true;
        return false;
      });

      validation.forEach((item: boolean, i: number) => {
        resposta[i].correto = item === null ? 0 : item ? 1 : -1;
      });

      return this.respostaModel.create({
        usuarioId: user,
        perguntaId,
        resposta,
      });
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

  async findOne(id: string) {
    try {
      const data = await this.respostaModel
        .findById(id)
        .populate('usuarioId')
        .populate('perguntaId')
        .populate({
          path: 'perguntaId',
          populate: {
            path: 'especialidade',
            model: 'Especialidade',
          },
        })
        .exec();

      // @ts-ignore
      data.usuarioId.password = undefined;

      return data;
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
