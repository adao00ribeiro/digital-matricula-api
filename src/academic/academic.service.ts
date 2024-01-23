import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAcademicDto } from './dto/create-academic.dto';
import { UpdateAcademicDto } from './dto/update-academic.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { validateCep } from 'src/Validation/Cep';


@Injectable()
export class AcademicService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createAcademicDto: CreateAcademicDto) {

    try {
      const existEmail = await this.findOneByEmail(createAcademicDto.email);
      if (existEmail) {
        throw new HttpException('E-mail já cadastrado.', HttpStatus.BAD_REQUEST);
      }
      if (!validateCep(createAcademicDto.cep)) {
        throw new HttpException("Cep Invalido", HttpStatus.BAD_REQUEST);
      }

      const cpfRegistered = await this.prisma.academic.findUnique({
        where: { cpf: createAcademicDto.cpf },
      });

      if (cpfRegistered) {
        throw new HttpException('CPF já cadastrado', HttpStatus.BAD_REQUEST);
      }

      const newAcademicRecord = await this.prisma.academic.create({
        data: createAcademicDto
      });
      return newAcademicRecord;

    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new Error('There is a unique constraint violation, a new user cannot be created with this email');
        }
      } else {
        throw e;
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
  async findOneByEmail(email: string) {
    return await this.prisma.academic.findUnique({
      where: { email }
    });
  }
  async update(id: string, updateAcademicDto: UpdateAcademicDto) {

    const academicExists = await this.prisma.academic.findUnique({ where: { id } });
    if (!academicExists) {
      throw new HttpException('Usuário não encontrado', HttpStatus.BAD_REQUEST);
    }

    if (validateCep(updateAcademicDto.cep)) {
      throw new HttpException("Cep Invalido", HttpStatus.BAD_REQUEST);
    }

    if (academicExists.cpf === updateAcademicDto.cpf) {
      throw new HttpException('CPF já cadastrado.', HttpStatus.BAD_REQUEST);
    }

    const updatedAcademic = await this.prisma.academic.update({
      where: { id },
      data: { enrolledCourses: { set: updateAcademicDto.enrolledCourses.connect } },
    });
    return updatedAcademic;
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
