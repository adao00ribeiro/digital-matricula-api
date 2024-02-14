import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEnrolledcourseDto } from './dto/create-enrolledcourse.dto';
import { UpdateEnrolledcourseDto } from './dto/update-enrolledcourse.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Enrolledcourse } from './entities/enrolledcourse.entity';

@Injectable()
export class EnrolledcourseService {

  constructor(private readonly prisma: PrismaService) { }

  async create(createEnrolledcourseDto: CreateEnrolledcourseDto) {
    const courseexist = await this.prisma.course.findUnique({
      where: { id: createEnrolledcourseDto.courseId }
    })
    const enrolmentdata = await this.prisma.enrollment.findUnique({
      where: { id: createEnrolledcourseDto.enrollmentId }
    })
    if (!courseexist) {
      throw new HttpException('Curso nao existe.', HttpStatus.BAD_REQUEST);
    }
    if (!enrolmentdata) {
      throw new HttpException('Academico nao existe.', HttpStatus.BAD_REQUEST);
    }

    const enrolledCourse = await this.prisma.enrolledCourse.findFirst({
      where: {
        courseId: createEnrolledcourseDto.courseId,
        enrollmentId: createEnrolledcourseDto.enrollmentId
      }
    });

    if (enrolledCourse) {
      throw new HttpException("JA ESTA MATRICULADO NO CURSO", HttpStatus.ACCEPTED);
    } else {
      return await this.prisma.enrolledCourse.create({
        data: createEnrolledcourseDto
      })
    }
  }

  async findAll(): Promise<Enrolledcourse[]> {
    return await this.prisma.enrolledCourse.findMany();
  }

  async findOne(id: string): Promise<Enrolledcourse | null> {
    return await this.prisma.enrolledCourse.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateEnrolledcourseDto: UpdateEnrolledcourseDto): Promise<Enrolledcourse> {
    return await this.prisma.enrolledCourse.update({
      where: { id },
      data: updateEnrolledcourseDto,
    });
  }

  async remove(id: string) {

    await this.prisma.enrolledCourse.delete({
      where: { id },
    });
  }
}
