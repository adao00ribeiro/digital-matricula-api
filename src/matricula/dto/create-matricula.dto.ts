export class CreateMatriculaDto {
    idcourse:string;
    name: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    cep: string;
    cpf: string;
    birthday: string;
    imagesUrls:{
        imageFrente: string,
        imageVerso:string        
    }

}
