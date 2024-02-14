import { Prisma } from "@prisma/client";

export class Document implements Prisma.DocumentUncheckedCreateInput {
    id?: string;
    frontdocumentUrl: string;
    backdocumentUrl: string;
    enrollmentId: string;
}
