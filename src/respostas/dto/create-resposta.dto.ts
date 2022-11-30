import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

/*
 * usuário id
 * pergunta id
 * resposta
 **/

export class CreateRespostaDto {
  @ApiProperty({
    description: 'Usuário id',
    example: '63873dca20617bca87c94f8e',
  })
  usuarioId: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    description: 'Pergunta id',
    example: '63875f797a8d16d2e2963337',
  })
  perguntaId: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    description: 'Resposta',
    example: [
      {
        pergunta: 1,
        resposta: 'Felidae',
        correto: true,
      },
    ],
  })
  resposta: [
    {
      pergunta: number;
      resposta: string;
      correto: boolean;
    },
  ];
}
