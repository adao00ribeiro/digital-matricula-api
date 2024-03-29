import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CourseModule } from './course/course.module';
import { EnrolledcourseModule } from './enrolledcourse/enrolledcourse.module';
import { DocumentModule } from './document/document.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { PersonaldataModule } from './personaldata/personaldata.module';
import { RemoveImageService } from './service/remove-image/remove-image.service';

@Module({
  imports: [PrismaModule, CourseModule, EnrolledcourseModule, DocumentModule, EnrollmentModule, PersonaldataModule],
  controllers: [AppController],
  providers: [AppService, RemoveImageService],
})
export class AppModule { }
