import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CertificadosService } from './certificados.service';

@Controller('certificados')
@ApiTags('certificados')
export class CertificadosController {
  constructor(private readonly certificadosService: CertificadosService) {}

  @Get(':id')
  sendCertificado(@Param('id') id: string) {
    return this.certificadosService.sendCertificado(id);
  }
}
