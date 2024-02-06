import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DocumentService {


  constructor(private readonly prisma: PrismaService) { }

  async create(createDocumentDto: CreateDocumentDto) {
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
  async update(id: string, updateDocumentDto: UpdateDocumentDto) {
    const existingDocument = await this.prisma.document.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingDocument) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }

    const updatedDocument = await this.prisma.document.update({
      where: {
        id: id,
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
