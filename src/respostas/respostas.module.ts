import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Resposta, RespostaSchema } from './entities/resposta.entity';
import { RespostasController } from './respostas.controller';
import { RespostasService } from './respostas.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Resposta.name, schema: RespostaSchema },
    ]),
  ],
  controllers: [RespostasController],
  providers: [RespostasService],
})
export class RespostasModule {}
