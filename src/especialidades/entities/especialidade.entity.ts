import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type EspecialidadeDocument = Especialidade & Document;

@Schema()
export class Especialidade {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, ref: 'Area' })
  area: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  icon: string;
}

export const EspecialidadeSchema = SchemaFactory.createForClass(Especialidade);
