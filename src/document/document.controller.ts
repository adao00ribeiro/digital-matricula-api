import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Header, UseInterceptors, BadRequestException, UploadedFiles } from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';

@ApiTags('Document Upload')
@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) { }

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
  async create(@UploadedFiles() files: Express.Multer.File[], @Body() createDocumentDto: CreateDocumentDto) {

    const imagesUrls = files.map(file => `/${file.filename}`);

    const data = {
      ...createDocumentDto,
      frontdocumentUrl: imagesUrls[0], // Assumindo que a primeira imagem é a imagemFrente
      backdocumentUrl: imagesUrls[1],  // Assumindo que a segunda imagem é a imageVerso
    };
    console.log(data)
    //return await this.documentService.create(createDocumentDto);
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
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDocumentDto: UpdateDocumentDto) {

    return this.documentService.update(id, updateDocumentDto);

  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    return this.documentService.remove(id);

  }
}
