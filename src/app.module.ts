import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreasModule } from './areas/areas.module';
import { EspecialidadesModule } from './especialidades/especialidades.module';
import { UploadsModule } from './uploads/uploads.module';
import { CertificadosModule } from './certificados/certificados.module';
import { UsersModule } from './users/users.module';
import { PerguntasModule } from './perguntas/perguntas.module';
import { RespostasModule } from './respostas/respostas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/especialidades'),
    MulterModule.register({
      dest: './files',
    }),
    EspecialidadesModule,
    AreasModule,
    UploadsModule,
    CertificadosModule,
    UsersModule,
    PerguntasModule,
    RespostasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
