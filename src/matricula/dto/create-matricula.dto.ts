import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMatriculaDto {

    @ApiProperty({
        description: "ID do curso",
        example: "a93b285e-9e1a-4cef-b9fa-338923f8198c"
    })
    @IsString()
    @IsNotEmpty({ message: 'O ID do curso deve ser preenchido.' })
    idcourse: string;

    @ApiProperty({
        description: "Nome do acadêmico",
        example: "John Doe"
    })
    @IsString()
    @IsNotEmpty({ message: 'O nome do acadêmico deve ser preenchido.' })
    name: string;

    @ApiProperty({
        description: "E-mail do acadêmico",
        example: "john.doe@example.com"
    })
    @IsString()
    @IsNotEmpty({ message: 'O e-mail do acadêmico deve ser preenchido.' })
    email: string;

    @ApiProperty({
        description: "Número de telefone do acadêmico",
        example: "44999246859"
    })
    @IsString()
    @IsNotEmpty({ message: 'O número de telefone do acadêmico deve ser preenchido.' })
    phone: string;

    @ApiProperty({
        description: "Cidade do acadêmico",
        example: "Cityville"
    })
    @IsString()
    city: string;

    @ApiProperty({
        description: "Estado do acadêmico",
        example: "Stateville"
    })
    @IsString()
    state: string;

    @ApiProperty({
        description: "CEP do acadêmico",
        example: "12345-678"
    })
    @IsString()
    cep: string;

    @ApiProperty({
        description: "CPF do acadêmico",
        example: "123.456.789-09"
    })
    @IsString()
    @IsNotEmpty({ message: 'O CPF do acadêmico deve ser preenchido.' })
    cpf: string;

    @ApiProperty({
        description: "Data de nascimento do acadêmico",
        example: "1990-01-01"
    })
    @IsString()
    @IsNotEmpty({ message: 'A data de nascimento do acadêmico deve ser preenchida.' })
    birthday: string;

    @ApiProperty({
        description: "URLs das imagens dos documentos",
        example: {
            imageFrente: "url-da-imagem-frente",
            imageVerso: "url-da-imagem-verso"
        }
    })
    imagesUrls: {
        imageFrente: string;
        imageVerso: string;
    };
}
