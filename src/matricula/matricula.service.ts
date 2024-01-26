import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAcademicDto } from 'src/academic/dto/create-academic.dto';
import { Enrolledcourse } from 'src/enrolledcourse/entities/enrolledcourse.entity';
import { Academic } from 'src/academic/entities/academic.entity';




@Injectable()
export class MatriculaService {

  constructor(private readonly prisma:PrismaService){}
 async create(createMatriculaDto: CreateMatriculaDto) {
  

  const academic: Academic = {
    name: createMatriculaDto.name,
    email: createMatriculaDto.email,
    phone: createMatriculaDto.phone,
    city: createMatriculaDto.city,
    state: createMatriculaDto.state,
    cep: createMatriculaDto.cep,
    cpf: createMatriculaDto.cpf,
    birthday: createMatriculaDto.birthday,
  };
 
  try {

    const academicExist =  await this.prisma.academic.findUnique({
      where:{cpf: academic.cpf}
    })
    let resultacademic = null;
    if(academicExist){
         resultacademic =  await this.prisma.academic.update({
          where: { id : academicExist.id },
          data:academic
        })
        if(!resultacademic){
          throw new HttpException('Erro ao atualizar academico', HttpStatus.BAD_REQUEST);
        }else{
          console.log("fez o update")
        }
    }else{
      resultacademic =  await this.prisma.academic.create({
        data:academic,
      })

      if(!resultacademic){
        throw new HttpException('Erro ao Criar Academico', HttpStatus.BAD_REQUEST);
      }else{
        console.log("crio novo academico")
      }
    }
  
    const Enrolledcourse: Enrolledcourse = {
      academicId: resultacademic.id,
      courseId: createMatriculaDto.idcourse
    };

    const resultAcademic = await this.prisma.enrolledCourse.findMany({
      where: { academicId: academicExist.id },
    });
    resultAcademic.map(x =>{
      if(x.courseId == createMatriculaDto.idcourse){
        throw new HttpException('Voce ja se Matriculo nesse Curso', HttpStatus.BAD_REQUEST);
      }
    })
    // Inicia a transação
    await this.prisma.$transaction([
      this.prisma.enrolledCourse.create({
      data:Enrolledcourse
      }),
      this.prisma.document.create({
        data:{
          academicId:resultacademic.id,
          documentUrl:createMatriculaDto.imagesUrls.imageFrente
        }
      }),
      this.prisma.document.create({
        data:{
          academicId:resultacademic.id,
          documentUrl:createMatriculaDto.imagesUrls.imageVerso
        }
      })
    ]);
    // Commit da transação bem-sucedida
    return { success: true, message: 'Matrícula criada com sucesso.' };
  } catch (error) {
    // Rollback em caso de falha na transação
    console.error('Erro durante a transação:', error);
    return { success: false, message: error.message };
  }
  }

  findAll() {
    return `This action returns all matricula`;
  }

  findOne(id: number) {
    return `This action returns a #${id} matricula`;
  }

  update(id: number, updateMatriculaDto: UpdateMatriculaDto) {
    return `This action updates a #${id} matricula`;
  }

  remove(id: number) {
    return `This action removes a #${id} matricula`;
  }
}
