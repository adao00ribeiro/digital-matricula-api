import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePersonaldatumDto } from './dto/create-personaldatum.dto';
import { UpdatePersonaldatumDto } from './dto/update-personaldatum.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonaldataService {

  constructor(private readonly prismaService: PrismaService) { }
  async create(createPersonaldatumDto: CreatePersonaldatumDto) {
    const personaldata = await this.prismaService.personalData.findUnique({
      where: { cpf: createPersonaldatumDto.cpf }
    });
   
    if (personaldata) {
      throw new HttpException("Cpf ja esta em uso", HttpStatus.BAD_REQUEST);
    }
   
    return await this.prismaService.personalData.create({
      data: createPersonaldatumDto
    });
  }
  async findAll() {
    return await this.prismaService.personalData.findMany();
  }

  async findOne(cpf: string) {
    return `This action returns a #${cpf} personaldatum`;
  }
  async findOneByCpf(cpf: string) {
    const personaldata = await this.prismaService.personalData.findUnique({
      where: { cpf: cpf }
    });

    if (!personaldata) {
      throw new HttpException("Cpf nao existe", HttpStatus.NOT_FOUND);
    }
    return personaldata;
  }
  async update(cpf: string, updatePersonaldatumDto: UpdatePersonaldatumDto) {
    return await this.prismaService.personalData.update({
      data: updatePersonaldatumDto,
      where: { cpf: cpf }
    });
  }

  async remove(cpf: string) {
    const personaldata = await this.prismaService.personalData.findUnique({
      where: { cpf: cpf }
    });
    if (!personaldata) {
      throw new HttpException("Cpf nao existe", HttpStatus.NOT_FOUND);
    }
    return await this.prismaService.personalData.delete({
      where: { cpf }
    });
  }
}
