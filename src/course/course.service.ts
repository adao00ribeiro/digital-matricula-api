import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CourseService {

  constructor(private readonly prisma: PrismaService) { }


  async findAll() {
    return await this.prisma.course.findMany();
  }

}
