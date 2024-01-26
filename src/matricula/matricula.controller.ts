import { Controller, Get, Post, Body, Patch, Param, Delete, Header, UseInterceptors, UploadedFiles, BadRequestException } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@ApiTags('Matricula')
@Controller('matricula')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) { }


  @Header('Content-Type', 'application/image')
  @UseInterceptors(FilesInterceptor('files', 2, {
    storage: diskStorage({
      destination: "./public/uploads",
      filename: (req, file, cb) => {
        const ext = extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpeg' && ext !== '.jpg') {
          return cb(new BadRequestException('Apenas arquivos PNG e JPEG são permitidos'), null);
        }
        cb(null, `${file.originalname}`)
      }
    })
  }))
  @Post()
  async create(@UploadedFiles() files: Express.Multer.File[], @Body() createMatriculaDto: CreateMatriculaDto) {
    const imagesUrls = files.map(file => `/public/uploads/${file.filename}`);
    const matriculaDtoWithImages = {
      ...createMatriculaDto,
      imagesUrls: {
        imageFrente: imagesUrls[0], // Assumindo que a primeira imagem é a imagemFrente
        imageVerso: imagesUrls[1],  // Assumindo que a segunda imagem é a imageVerso
      },
    };
    return await this.matriculaService.create(matriculaDtoWithImages);
  }
}
