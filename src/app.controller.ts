import { Controller, Get, Header, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Post('upload')
  @Header('Content-Type', 'application/pdf')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: "./public/uploads",
      filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
      }
    })
  }))
  async UploadFile(@UploadedFile() file: Express.Multer.File) {
    const { destination, filename } = file;
    return "url";
  }

}
