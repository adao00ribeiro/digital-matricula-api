import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAcademicDto } from './dto/create-academic.dto';
import { UpdateAcademicDto } from './dto/update-academic.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AcademicService {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateAcademicDto) {
    try {
      return await this.prisma.academic.create(
        {
          data
        }
      );
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new Error('There is a unique constraint violation, a new user cannot be created with this email');
        }
      }
    }
  }

  async findAll() {
    return await this.prisma.academic.findMany();
  }

  async findOne(id: string) {
    return this.prisma.academic.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateAcademicDto: UpdateAcademicDto) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('Record to update does not exist.');
    }
    return this.prisma.academic.update({
      where: { id },
      data: updateAcademicDto
    })
  }

  async remove(id: string) {
    try {
      return await this.prisma.academic.delete({
        where: { id }
      })
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          throw new Error('Record to delete does not exist.');
        }
      }
    }
  }
}
