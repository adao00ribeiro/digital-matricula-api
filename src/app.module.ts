import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcademicModule } from './academic/academic.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './exception/http-exception.filter';
import { CourseModule } from './course/course.module';
import { EnrolledcourseModule } from './enrolledcourse/enrolledcourse.module';

@Module({
  imports: [AcademicModule, PrismaModule, CourseModule, EnrolledcourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
