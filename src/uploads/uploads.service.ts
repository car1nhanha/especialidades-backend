import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadsService {
  uploadFile(file: any) {
    return {
      originalname: file.originalname,
      filename: file.filename,
      success: true,
    };
  }
}
