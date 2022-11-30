import { ApiProperty } from '@nestjs/swagger';

export class CreateAreaDto {
  @ApiProperty({
    description: 'Nome da área',
    example: 'Estudo da Natureza',
  })
  name: string;

  @ApiProperty({
    description: 'Icone da área',
    example: 'nature',
  })
  icon: string;
}
