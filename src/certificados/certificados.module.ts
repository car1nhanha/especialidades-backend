import { Module } from '@nestjs/common';
import { RespostasModule } from 'src/respostas/respostas.module';
import { CertificadosController } from './certificados.controller';
import { CertificadosService } from './certificados.service';

@Module({
  imports: [RespostasModule],
  controllers: [CertificadosController],
  providers: [CertificadosService],
})
export class CertificadosModule {}
