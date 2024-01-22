import { Prisma } from "@prisma/client";

export class Course implements Prisma.CourseUncheckedCreateInput {
    id?: string;
    name: string;
    modality: string;
    type: string;
    investmentvalue: number;
    numberofinstallments: number;
    academicId?: string;
}
