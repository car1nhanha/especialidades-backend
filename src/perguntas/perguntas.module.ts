import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pergunta, PerguntaSchema } from './entities/pergunta.entity';
import { PerguntasController } from './perguntas.controller';
import { PerguntasService } from './perguntas.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pergunta.name, schema: PerguntaSchema },
    ]),
  ],
  controllers: [PerguntasController],
  providers: [PerguntasService],
})
export class PerguntasModule {}
