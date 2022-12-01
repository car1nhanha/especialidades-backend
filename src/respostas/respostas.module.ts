import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PerguntasModule } from 'src/perguntas/perguntas.module';
import { Resposta, RespostaSchema } from './entities/resposta.entity';
import { RespostasController } from './respostas.controller';
import { RespostasService } from './respostas.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Resposta.name, schema: RespostaSchema },
    ]),
    PerguntasModule,
  ],
  controllers: [RespostasController],
  providers: [RespostasService],
  exports: [RespostasService],
})
export class RespostasModule {}
