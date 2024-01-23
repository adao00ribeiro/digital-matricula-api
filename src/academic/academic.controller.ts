import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException, UseFilters } from '@nestjs/common';
import { AcademicService } from './academic.service';
import { CreateAcademicDto } from './dto/create-academic.dto';
import { UpdateAcademicDto } from './dto/update-academic.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Academic')
@Controller('academic')
export class AcademicController {
  constructor(private readonly academicService: AcademicService) { }

  @Post()
  async create(@Body() createAcademicDto: CreateAcademicDto) {
    try {
      return await this.academicService.create(createAcademicDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.academicService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }

  }
  @Get(':id')
  async findOne(@Param('id') id: string) {

    try {
      return await this.academicService.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAcademicDto: UpdateAcademicDto) {

    try {
      return await this.academicService.update(id, updateAcademicDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    try {
      return await this.academicService.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
