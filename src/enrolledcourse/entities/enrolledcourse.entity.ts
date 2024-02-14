import { Prisma } from "@prisma/client";

export class Enrolledcourse implements Prisma.EnrolledCourseUncheckedCreateInput {
    id?: string;
    enrollmentId: string;
    courseId: string;
}
