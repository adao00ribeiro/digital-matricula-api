import { Injectable } from '@nestjs/common';
import { CreatePersonaldatumDto } from './dto/create-personaldatum.dto';
import { UpdatePersonaldatumDto } from './dto/update-personaldatum.dto';

@Injectable()
export class PersonaldataService {

  create(createPersonaldatumDto: CreatePersonaldatumDto) {
    return 'This action adds a new personaldatum';
  }

  findAll() {
    return `This action returns all personaldata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personaldatum`;
  }
  async findOneByCpf(cpf: string) {
    throw new Error('Method not implemented.');
  }
  update(id: number, updatePersonaldatumDto: UpdatePersonaldatumDto) {
    return `This action updates a #${id} personaldatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} personaldatum`;
  }
}
