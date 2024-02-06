import { Prisma } from "@prisma/client";

export class Enrollment implements Prisma.EnrollmentUncheckedCreateInput {
    id?: string;
    email: string;
    name: string;
    phone: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
    PersonalData?: Prisma.PersonalDataUncheckedCreateNestedOneWithoutEnrollmentInput;
    Document?: Prisma.DocumentUncheckedCreateNestedOneWithoutEnrollmentInput;
    enrolledCourses?: Prisma.EnrolledCourseUncheckedCreateNestedManyWithoutEnrollmentInput;
}
