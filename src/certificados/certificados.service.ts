import { Inject, Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import mongoose from 'mongoose';
import { RespostasService } from 'src/respostas/respostas.service';
import { generatePNG } from '../utils/certificados/certificado';

@Injectable()
export class CertificadosService {
  constructor(
    @Inject(RespostasService)
    private readonly respostasService: RespostasService,
  ) {}

  async sendCertificado(id: string) {
    try {
      const response = await this.respostasService.findOne(id);
      if (!response) throw new Error('Resposta não encontrada');

      const { usuarioId, perguntaId, createdAt } = response;

      const png = await generatePNG({
        name: usuarioId.name,
        date: createdAt
          ? format(createdAt, 'dd/MM/yyyy')
          : format(new Date(), 'dd/MM/yyyy'),
        especialidade: perguntaId.especialidade.name,
        code: new mongoose.Types.ObjectId(id),
      });
      return png;
    } catch (error) {
      return error;
    }
  }
}
// rotas para ler o código qrcode para validação
// estrutura de cadastro de pessoas
// estrutura de cadastro de especialidades respondidas
