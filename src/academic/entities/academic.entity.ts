import { Prisma } from "@prisma/client";

export class Academic implements Prisma.AcademicUncheckedCreateInput {
    id?: string;
    name: string;
    email: string;
    phone: string;
    city?: string;
    state?: string;
    cep: string;
    cpf: string;
    birthday: string;

    createdAt?: string | Date;
    updatedAt?: string | Date;

    Document?: Prisma.DocumentUncheckedCreateNestedManyWithoutAcademicInput;
    enrolledCourses?: Prisma.EnrolledCourseUncheckedCreateNestedManyWithoutAcademicInput;



}

