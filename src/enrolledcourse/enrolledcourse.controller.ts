import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnrolledcourseService } from './enrolledcourse.service';
import { CreateEnrolledcourseDto } from './dto/create-enrolledcourse.dto';
import { UpdateEnrolledcourseDto } from './dto/update-enrolledcourse.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Enrolled Course')
@Controller('enrolledcourse')
export class EnrolledcourseController {
  constructor(private readonly enrolledcourseService: EnrolledcourseService) { }

  @Post()
  create(@Body() createEnrolledcourseDto: CreateEnrolledcourseDto) {
    return this.enrolledcourseService.create(createEnrolledcourseDto);
  }

  @Get()
  findAll() {
    return this.enrolledcourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enrolledcourseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnrolledcourseDto: UpdateEnrolledcourseDto) {
    return this.enrolledcourseService.update(id, updateEnrolledcourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enrolledcourseService.remove(id);
  }
}
