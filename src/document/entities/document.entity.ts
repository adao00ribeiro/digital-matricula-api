import { Prisma } from "@prisma/client";

export class Document implements Prisma.DocumentUncheckedCreateInput {
    id?: string;
    academicId: string;
    documentUrl: string;
}
