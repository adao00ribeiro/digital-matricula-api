import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const coursesData = [
        {
            name: 'Engenharia Civil',
            modality: 'Presencial',
            type: 'Graduação',
            investmentvalue: 1300.0,
            numberofinstallments: 12,
        },
        {
            name: 'Psicologia',
            modality: 'Presencial',
            type: 'Graduação',
            investmentvalue: 1400.0,
            numberofinstallments: 12,
        },
        {
            name: 'Design Gráfico',
            modality: 'Presencial',
            type: 'Graduação',
            investmentvalue: 1100.0,
            numberofinstallments: 10,
        },
        {
            name: 'Marketing Digital',
            modality: 'Online',
            type: 'Curso Livre',
            investmentvalue: 800.0,
            numberofinstallments: 6,
        },
        {
            name: 'Engenharia Elétrica',
            modality: 'Presencial',
            type: 'Graduação',
            investmentvalue: 1400.0,
            numberofinstallments: 12,
        },
        {
            name: 'Medicina',
            modality: 'Presencial',
            type: 'Graduação',
            investmentvalue: 2500.0,
            numberofinstallments: 24,
        },
        {
            name: 'Gestão de Projetos',
            modality: 'Online',
            type: 'Pós-graduação',
            investmentvalue: 1800.0,
            numberofinstallments: 12,
        },
        {
            name: 'Ciências Ambientais',
            modality: 'Presencial',
            type: 'Graduação',
            investmentvalue: 1200.0,
            numberofinstallments: 10,
        },
        {
            name: 'Arquitetura',
            modality: 'Presencial',
            type: 'Graduação',
            investmentvalue: 1600.0,
            numberofinstallments: 12,
        },
        {
            name: 'Engenharia Mecânica',
            modality: 'Presencial',
            type: 'Graduação',
            investmentvalue: 1350.0,
            numberofinstallments: 12,
        },
        {
            name: 'Educação Física',
            modality: 'Presencial',
            type: 'Graduação',
            investmentvalue: 1000.0,
            numberofinstallments: 8,
        },
        {
            name: 'Economia',
            modality: 'Presencial',
            type: 'Graduação',
            investmentvalue: 1500.0,
            numberofinstallments: 12,
        },
        {
            name: 'Nutrição',
            modality: 'Presencial',
            type: 'Graduação',
            investmentvalue: 1200.0,
            numberofinstallments: 10,
        },
        {
            name: 'Programação Web',
            modality: 'Online',
            type: 'Curso Técnico',
            investmentvalue: 900.0,
            numberofinstallments: 6,
        },
        {
            name: 'Filosofia',
            modality: 'Presencial',
            type: 'Graduação',
            investmentvalue: 1100.0,
            numberofinstallments: 10,
        },
    ];

    for (const courseData of coursesData) {
        await prisma.course.create({
            data: courseData,
        });
    }

    console.log('Seed concluído!');
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
