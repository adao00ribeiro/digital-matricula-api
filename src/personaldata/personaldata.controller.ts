import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonaldataService } from './personaldata.service';
import { CreatePersonaldatumDto } from './dto/create-personaldatum.dto';
import { UpdatePersonaldatumDto } from './dto/update-personaldatum.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Personal Data')
@Controller('personaldata')
export class PersonaldataController {
  constructor(private readonly personaldataService: PersonaldataService) { }

  @Post()
 async  create(@Body() createPersonaldatumDto: CreatePersonaldatumDto) {
    return await this.personaldataService.create(createPersonaldatumDto);
  }
  @Get()
  async findAll() {
    return await this.personaldataService.findAll();
  }
  @Get(':cpf')
  async findOne(@Param('cpf') cpf: string) {
    return await this.personaldataService.findOne(cpf);
  }
  @Get('cpf/:cpf')
  async findOneByCpf(@Param('cpf') cpf: string) {
    return await this.personaldataService.findOneByCpf(cpf);
  }
  @Patch(':cpf')
  async update(@Param('cpf') cpf: string, @Body() updatePersonaldatumDto: UpdatePersonaldatumDto) {
    return await this.personaldataService.update(cpf, updatePersonaldatumDto);
  }

  @Delete(':cpf')
  async remove(@Param('cpf') cpf: string) {
    return await this.personaldataService.remove(cpf);
  }
}
