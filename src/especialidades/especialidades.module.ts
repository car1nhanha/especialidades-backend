import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Especialidade,
  EspecialidadeSchema,
} from './entities/especialidade.entity';
import { EspecialidadesController } from './especialidades.controller';
import { EspecialidadesService } from './especialidades.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Especialidade.name, schema: EspecialidadeSchema },
    ]),
  ],
  controllers: [EspecialidadesController],
  providers: [EspecialidadesService],
})
export class EspecialidadesModule {}
