import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RespostaDocument = Resposta & Document;

@Schema()
export class Resposta {
  @Prop({ required: true, ref: 'Usuario' })
  usuarioId: string;

  @Prop({ required: true, ref: 'Pergunta' })
  perguntaId: string;

  @Prop({ required: true })
  resposta: [
    {
      pergunta: number;
      resposta: string;
      correto: boolean;
    },
  ];
}

export const RespostaSchema = SchemaFactory.createForClass(Resposta);
