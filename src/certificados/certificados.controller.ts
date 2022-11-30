import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CertificadosService } from './certificados.service';

@Controller('certificados')
@ApiTags('certificados')
export class CertificadosController {
  constructor(private readonly certificadosService: CertificadosService) {}

  @Get()
  sendCertificado() {
    return this.certificadosService.sendCertificado();
  }
}
