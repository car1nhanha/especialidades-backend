import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export class CreateEspecialidadeDto {
  @ApiProperty({
    description: 'Nome da especialidade',
    example: 'Felinos',
  })
  name: {
    type: string;
    required: true;
  };

  @ApiProperty({
    description: 'Área da especialidade',
    example: '5f9f1b9b9c9d440017a5e9b6',
  })
  area: {
    type: mongoose.Types.ObjectId;
    required: true;
  };

  @ApiProperty({
    description: 'Ícone da especialidade',
    example: 'cat',
  })
  icon: {
    type: string;
    required: true;
  };
}
