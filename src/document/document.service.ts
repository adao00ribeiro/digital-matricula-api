import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RemoveImageService } from 'src/service/remove-image/remove-image.service';
import *as path from 'path';

@Injectable()
export class DocumentService {


  constructor(private readonly prisma: PrismaService, private readonly RemoveImage: RemoveImageService) { }

  async create(createDocumentDto: CreateDocumentDto) {

    const documentExist = await this.prisma.document.findUnique({
      where: {
        enrollmentId: createDocumentDto.enrollmentId,
      },
    });
    if (documentExist) {
      throw new HttpException("Documento ja existe", HttpStatus.BAD_REQUEST)
    }

    const document = await this.prisma.document.create({
      data: createDocumentDto
    });
    return document;
  }

  async findAll() {
    const documents = await this.prisma.document.findMany();
    return documents;
  }

  async findOne(id: string) {
    const document = await this.prisma.document.findUnique({
      where: {
        id: id,
      },
    });

    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }

    return document;
  }
  async findOneByEnrrolmentId(id: string) {
    const document = await this.prisma.document.findMany({
      where: {
        enrollmentId: id,
      },
    });

    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }

    return document;
  }
  async update(enrollmentId: string, updateDocumentDto: UpdateDocumentDto) {



    const existingDocument = await this.prisma.document.findUnique({
      where: {
        enrollmentId: enrollmentId,
      },
    });

    if (!existingDocument) {
      throw new HttpException("Documento Id nao existe", HttpStatus.BAD_REQUEST)
    }
    //fazer remocao das imagens antigas
    await this.RemoveImage.Remove(path.join(__dirname, "../..", "/public/uploads", existingDocument.frontdocumentUrl));
    await this.RemoveImage.Remove(path.join(__dirname, "../..", "/public/uploads", existingDocument.backdocumentUrl));
    const updatedDocument = await this.prisma.document.update({
      where: {
        id: existingDocument.id,
      },
      data: updateDocumentDto,
    });

    return updatedDocument;
  }

  async remove(id: string) {
    const existingDocument = await this.prisma.document.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingDocument) {
      throw new HttpException(`Document with ID ${id} not found`, HttpStatus.BAD_REQUEST);
    }

    return await this.prisma.document.delete({
      where: {
        id: id,
      },
    });
  }
}
