import { Module } from '@nestjs/common';
import { EnrolledcourseService } from './enrolledcourse.service';
import { EnrolledcourseController } from './enrolledcourse.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EnrolledcourseController],
  providers: [EnrolledcourseService]
})
export class EnrolledcourseModule { }
