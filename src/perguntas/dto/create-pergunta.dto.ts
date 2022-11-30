import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export class CreatePerguntaDto {
  @ApiProperty({
    description: 'id da especialidade',
    example: '6380ead77e97c714bc96ebcc',
  })
  especialidade: {
    type: mongoose.Schema.Types.ObjectId;
    required: true;
  };

  @ApiProperty({
    description: 'questões',
    example: [
      {
        indice: 1,
        pergunta: 'Qual é o nome científico da família do gato?',
        tipo: 'alternativa',
        alternativas: ['Felidae', 'Canidae', 'Ursidae', 'Mustelidae'],
        resposta: 'Felidae',
        imagem:
          '94ac72e4cc3a4270109fed8c1b5356f96hospital-veterinario-especialidade-felinos.jpg',
        autoCorrecao: true,
        descricao:
          'Felidae é a família de mamíferos carnívoros da ordem dos carnívoros, incluindo os gatos.',
      },
    ],
  })
  questoes: [
    {
      indice: number;
      pergunta: string;
      tipo: 'descritiva' | 'alternativa' | 'upload';
      alternativas: string[];
      resposta: string;
      imagem: string;
      autoCorrecao: boolean;
      descricao: string;
    },
  ];
}
