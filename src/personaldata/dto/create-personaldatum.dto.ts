import { Personaldatum } from "../entities/personaldatum.entity";

export class CreatePersonaldatumDto extends Personaldatum {
    cpf: string;
    city?: string;
    state?: string;
    cep: string;
    birthday: string;
    enrollmentId: string;
}
