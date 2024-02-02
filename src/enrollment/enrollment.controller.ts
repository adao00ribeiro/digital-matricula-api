import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Enrollment')
@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) { }

  @Post()
  async create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentService.create(createEnrollmentDto);
  }

  @Get()
  async findAll() {
    return this.enrollmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.enrollmentService.findOne(+id);
  }
  @Get('email/:email')
  async findOneByEmail(@Param('email') email: string) {
    return await this.enrollmentService.findOneByEmail(email);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateEnrollmentDto: UpdateEnrollmentDto) {
    return await this.enrollmentService.update(id, updateEnrollmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.enrollmentService.remove(id);
  }
}
