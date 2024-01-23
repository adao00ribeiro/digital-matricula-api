import { PartialType } from '@nestjs/swagger';
import { CreateEnrolledcourseDto } from './create-enrolledcourse.dto';

export class UpdateEnrolledcourseDto extends PartialType(CreateEnrolledcourseDto) {}
