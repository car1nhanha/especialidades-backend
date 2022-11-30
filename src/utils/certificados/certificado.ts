import * as fs from 'fs';
import mongoose from 'mongoose';
import * as qrcode from 'qrcode';
import * as sharp from 'sharp';

interface dataProps {
  name: string;
  date: string;
  especialidade: string;
  code: mongoose.Types.ObjectId;
}

export const generatePNG = async (data: dataProps) => {
  const svg = fs.readFileSync(
    './src/utils/certificados/certificado.svg',
    'utf8',
  );

  const qr = await qrcode.toDataURL(data.code.toString());
  if (!qr) {
    throw new Error('QRCode não gerado');
  }

  data.code = qr;

  const svgEditado = svg.replace(
    /name|date|especialidade|code/gi,
    (matched) => {
      return data[matched];
    },
  );

  const png = await sharp(Buffer.from(svgEditado)).png().toBuffer();
  const convert = Buffer.from(png).toString('base64');

  const base64 = `data:image/png;base64,${convert}`;

  return base64;
};
