import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type PerguntaDocument = Pergunta & Document;

@Schema()
export class Pergunta {
  @Prop({ required: true, ref: 'Especialidade' })
  especialidade: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
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

export const PerguntaSchema = SchemaFactory.createForClass(Pergunta);
