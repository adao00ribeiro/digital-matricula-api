import { Prisma } from "@prisma/client";

export class Personaldatum implements Prisma.PersonalDataUncheckedCreateInput {
    cpf: string;
    city?: string;
    state?: string;
    cep: string;
    birthday: string;
    enrollmentId: string;
}
