import { BadRequestException, Controller, Get, Header, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path, { extname } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Post('upload')
  @Header('Content-Type', 'application/image')
  @UseInterceptors(FilesInterceptor('files', 10,{
    storage: diskStorage({
      destination: "./public/uploads",
      filename: (req, file, cb) => {
        const ext = extname(file.originalname);
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        cb(null, `${randomName}${ext}`)
      }
    })
  }))

  async UploadFile(@UploadedFiles() files: Express.Multer.File[],@Res() res) {
   
    const uploadedFilesInfo = files.map(file => ({
      name: file.filename,
      destination: file.destination,
    }));
    return  res.json(uploadedFilesInfo);
  }

}
