import { ApiProperty } from "@nestjs/swagger";
import { Document } from "../entities/document.entity";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDocumentDto extends Document {
    @ApiProperty({
        description: "Id do acadenico",
        example: "a93b285e-9e1a-4cef-b9fa-338923f8198c"
    })
    @IsString()
    @IsNotEmpty({ message: 'O Id do academico deve ser preenchido.' })
    academicId: string;
    
    @ApiProperty({
        description: "Url do documento",
        example: "/public/uploads/nome.png"
    })
    @IsString()
    @IsNotEmpty({ message: 'O Url do documento deve ser preenchido.' })
    documentUrl: string;
}
