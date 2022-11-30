import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Lucas Carinhanha',
  })
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'lucascarinhanha4@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'data de nascimento',
    example: '1999-10-10',
  })
  birthDate: string;

  @ApiProperty({
    description: 'clube',
    example: '8683',
  })
  clube: string;

  @ApiProperty({
    description: 'senha',
    example: 'i2345678',
  })
  password: string;
}
