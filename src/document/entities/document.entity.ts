import { Prisma } from "@prisma/client";

export class Document implements Prisma.DocumentUncheckedCreateInput {
    id?: string;
    enrollmentId: string;
    documentUrl: string;
}
