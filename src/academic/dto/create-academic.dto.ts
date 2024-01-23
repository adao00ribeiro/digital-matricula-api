import { Academic } from "../entities/academic.entity";
import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";

export class CreateAcademicDto implements Omit<Academic, 'id' | 'createdAt' | 'updatedAt'> {
    @ApiProperty({
        description: "O nome é utilizado para exibir dados no perfil",
        example: "Adao Ribeiro"
    })
    @IsString()
    @IsNotEmpty({ message: 'O nome deve ser preenchido.' })
    @MaxLength(50, { message: 'O nome deve ter no máximo 50 caracteres.' })
    name: string;

    @ApiProperty({
        description: "O e-mail do acadêmico",
        example: "adao.ribeiro@example.com"
    })
    @IsEmail()
    @IsNotEmpty({ message: 'O e-mail deve ser preenchido.' })
    email: string;

    @ApiProperty({
        description: "O telefone do acadêmico",
        example: "123456789"
    })
    @IsString()
    @IsNotEmpty({ message: 'O telefone deve ser preenchido.' })
    phone: string;

    @ApiProperty({
        description: "A cidade onde o acadêmico reside",
        example: "São Paulo"
    })
    @IsOptional()
    @IsString()
    city?: string;

    @ApiProperty({
        description: "O estado onde o acadêmico reside",
        example: "SP"
    })
    @IsOptional()
    @IsString()
    state?: string;

    @ApiProperty({
        description: "O CEP do endereço do acadêmico",
        example: "12345-678"
    })
    @IsOptional()
    @IsString()
    cep: string;

    @ApiProperty({
        description: "O CPF do acadêmico",
        example: "123.456.789-09"
    })
    @IsNotEmpty({ message: 'O cpf deve ser preenchido.' })
    @IsString()
    cpf: string;

    @ApiProperty({
        description: "A data de nascimento do acadêmico",
        example: "1990-01-01"
    })
    @IsString()
    birthdate: string;

    createdAt?: string | Date;
    updatedAt?: string | Date;

    @IsOptional()
    @IsArray()
    Document?: Prisma.DocumentUncheckedCreateNestedManyWithoutAcademicInput;
    @IsOptional()
    @IsArray()
    enrolledCourses?: Prisma.EnrolledCourseUncheckedCreateNestedManyWithoutAcademicInput;

}
