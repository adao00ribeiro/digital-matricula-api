import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Header, UseInterceptors, BadRequestException, UploadedFiles, Put } from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { randomUUID } from 'crypto';

@ApiTags('Document Upload')
@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) { }

  @Header('Content-Type', 'application/image')
  @UseInterceptors(FilesInterceptor('files', 2, {
    storage: diskStorage({
      destination: "dist/public/uploads",
      filename: (req, file, cb) => {
        const ext = extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpeg' && ext !== '.jpg') {
          return cb(new BadRequestException('Apenas arquivos PNG e JPEG são permitidos'), null);
        }
        const filehash = randomUUID();
        const filename = `${filehash}-${file.originalname}`
        cb(null, filename)
      }
    })
  }))
  @Post()
  async create(@UploadedFiles() files: Express.Multer.File[], @Body() createDocumentDto: CreateDocumentDto) {

    const imagesUrls = files.map(file => `/${file.filename}`);

    const data = {
      ...createDocumentDto,
      frontdocumentUrl: imagesUrls[0], // Assumindo que a primeira imagem é a imagemFrente
      backdocumentUrl: imagesUrls[1],  // Assumindo que a segunda imagem é a imageVerso
    };

    return await this.documentService.create(data);
  }

  @Get()
  async findAll() {

    return this.documentService.findAll();

  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

    return this.documentService.findOne(id);

  }
  @Get('document/enrrolment/:id')
  async findOneByEnrrolmentId(@Param('id') id: string) {

    return this.documentService.findOneByEnrrolmentId(id);

  }
  @Header('Content-Type', 'application/image')
  @UseInterceptors(FilesInterceptor('files', 2, {
    storage: diskStorage({
      destination: "dist/public/uploads",
      filename: (req, file, cb) => {
        const ext = extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpeg' && ext !== '.jpg') {
          return cb(new BadRequestException('Apenas arquivos PNG e JPEG são permitidos'), null);
        }
        const filehash = randomUUID();
        const filename = `${filehash}-${file.originalname}`
        cb(null, filename)
      }
    })
  }))
  @Put(':enrollmentId')
  async update(@UploadedFiles() files: Express.Multer.File[], @Param('enrollmentId') enrollmentId: string, @Body() updateDocumentDto: UpdateDocumentDto) {
    const imagesUrls = files.map(file => `/${file.filename}`);

    const data = {
      ...UpdateDocumentDto,
      frontdocumentUrl: imagesUrls[0], // Assumindo que a primeira imagem é a imagemFrente
      backdocumentUrl: imagesUrls[1],  // Assumindo que a segunda imagem é a imageVerso
    };
    return this.documentService.update(enrollmentId, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    return this.documentService.remove(id);

  }
}
