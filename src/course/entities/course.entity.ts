import { Prisma } from "@prisma/client";

export class Course implements Prisma.CourseUncheckedCreateInput {
    id?: string;
    name: string;
    description: string;
    modality: string;
    type: string;
    url: string;
    investmentvalue: number;
    numberofinstallments: number;
}
