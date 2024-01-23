import { ApiProperty } from "@nestjs/swagger";
import { Enrolledcourse } from "../entities/enrolledcourse.entity";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateEnrolledcourseDto extends Enrolledcourse {
    @ApiProperty({
        description: "Id do academico",
        example: "15845465465"
    })
    @IsString()
    @IsNotEmpty({ message: 'O id do academico deve ser preenchido.' })
    academicId: string;

    @ApiProperty({
        description: "Id do curso",
        example: "15845465465"
    })
    @IsString()
    @IsNotEmpty({ message: 'O id do curso deve ser preenchido.' })
    courseId: string;
}
