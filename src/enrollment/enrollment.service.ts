import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnrollmentService {

  constructor(private readonly prismaservice: PrismaService) {

  }
  async create(createEnrollmentDto: CreateEnrollmentDto) {

    const dataEmail = await this.prismaservice.enrollment.findUnique({
      where: { email: createEnrollmentDto.email }
    });

    if (dataEmail) {
      throw new HttpException("email ja esta em uso.", HttpStatus.NOT_FOUND)
    }
    const dataPhone = await this.prismaservice.enrollment.findUnique({
      where: { phone: createEnrollmentDto.phone }
    });

    if (dataPhone) {
      throw new HttpException("Telefone ja esta em uso.", HttpStatus.NOT_FOUND)
    }

    return await this.prismaservice.enrollment.create({
      data: createEnrollmentDto
    });
  }

  async findAll() {
    return `This action returns all enrollment`;
  }

  async findOne(id: number) {

  }
  async findOneByEmail(email: string) {
    try {
      return await this.prismaservice.enrollment.findUnique({
        where: { email }
      });
    } catch (error) {
      throw new HttpException("nao encontrado", HttpStatus.NOT_FOUND);
    }
  }
  async findOneByPhone(phone: string) {

  }
  async update(id: string, updateEnrollmentDto: UpdateEnrollmentDto) {

    return await this.prismaservice.enrollment.update({
      data: updateEnrollmentDto,
      where: { id: id }
    });
  }

  async remove(id: string) {
    return `This action removes a #${id} enrollment`;
  }
}
