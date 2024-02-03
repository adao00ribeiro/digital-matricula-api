import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Personaldatum } from "../entities/personaldatum.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePersonaldatumDto extends Personaldatum {
    @ApiProperty({
        description: "CPF do Academico para Incrição",
        example: "jodo@hotmail.com"
    })
    @IsString()
    @IsNotEmpty({ message: 'O CPF deve ser preenchido.' })
    cpf: string;
    @ApiProperty({
        description: "Cidade do Academico para Incrição",
        example: "Araruna"
    })
    @IsString()
    @IsOptional()
    city?: string;
    @ApiProperty({
        description: "Estado do Academico para Incrição",
        example: "Parana"
    })
    @IsString()
    @IsOptional()
    state?: string;

    @ApiProperty({
        description: "Cep do Academico para Incrição",
        example: "87260-000"
    })
    @IsString()
    @IsNotEmpty({ message: 'O Cep deve ser preenchido.' })
    cep: string;
    @ApiProperty({
        description: "Data de Nascimento do Academico para Incrição",
        example: "jodo@hotmail.com"
    })
    @IsString()
    @IsNotEmpty({ message: 'A data de nascimento deve ser preenchido.' })
    birthday: string;

    @ApiProperty({
        description: "Id do Academico para Incrição",
        example: "jodo@hotmail.com"
    })
    @IsString()
    @IsNotEmpty({ message: 'O Id deve ser preenchido.' })
    enrollmentId: string;
}
