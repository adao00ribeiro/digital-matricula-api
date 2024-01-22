import { Prisma } from "@prisma/client";
import { Academic } from "../entities/academic.entity";
import {
    IsArray,
    IsDateString,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
} from 'class-validator';

export class CreateAcademicDto extends Academic {
    @IsString()
    @IsNotEmpty({ message: 'O nome deve ser preenchido.' })
    @MaxLength(50, { message: 'O nome deve ter no máximo 50 caracteres.' })
    name: string;

    @IsEmail()
    @IsNotEmpty({ message: 'O e-mail deve ser preenchido.' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'O telefone deve ser preenchido.' })
    phone: string;

    @IsOptional()
    @IsString()
    city?: string;

    @IsOptional()
    @IsString()
    state?: string;

    @IsOptional()
    @IsString()
    cep?: string;

    @IsNotEmpty({ message: 'O cpf deve ser preenchido.' })
    @IsString()
    cpf: string;

    @IsOptional()
    @IsString()
    birthdate?: string | Date;

    @IsOptional()
    @IsString()
    document: string;

    createdAt?: string | Date;
    updatedAt?: string | Date;

}
