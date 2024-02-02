import { Prisma } from "@prisma/client";
import { Enrollment } from "../entities/enrollment.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateEnrollmentDto extends Enrollment {
    @ApiProperty({
        description: "Email do Academico para Incrição",
        example: "jodo@hotmail.com"
    })
    @IsString()
    @IsNotEmpty({ message: 'O Email deve ser preenchido.' })
    email: string;

    @ApiProperty({
        description: "Nome do Academico para Incrição",
        example: "jodo"
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: "Telefone do Academico",
        example: "4499999-0000"
    })
    @IsString()
    @IsNotEmpty({ message: 'O Telefone do Academico deve ser preenchido.' })
    phone: string;

}
