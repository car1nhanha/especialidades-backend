import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type RespostaDocument = Resposta & Document;

@Schema()
export class Resposta {
  @Prop({ required: true, ref: 'User' })
  usuarioId: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true, ref: 'Pergunta' })
  perguntaId: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  resposta: [
    {
      pergunta: number;
      resposta: string;
      correto: boolean;
    },
  ];

  @Prop({ required: true, default: new Date() })
  createdAt: Date;
}

export const RespostaSchema = SchemaFactory.createForClass(Resposta);
