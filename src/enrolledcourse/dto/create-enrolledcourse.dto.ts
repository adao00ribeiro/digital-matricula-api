import { Enrolledcourse } from "../entities/enrolledcourse.entity";

export class CreateEnrolledcourseDto extends Enrolledcourse {

    academicId: string;
    courseId: string;
}
