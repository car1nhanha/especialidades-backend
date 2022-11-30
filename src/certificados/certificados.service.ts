import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { generatePNG } from '../utils/certificados/certificado';

@Injectable()
export class CertificadosService {
  async sendCertificado() {
    try {
      const png = await generatePNG({
        name: 'Lucas carinhanha de araujo',
        date: '10/10/2020',
        especialidade: 'Especialidade de felinos',
        code: new mongoose.Types.ObjectId('63854142e0830c22c42f98e1'),
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
