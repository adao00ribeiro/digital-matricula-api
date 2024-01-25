import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const coursesData = [
        {
            name: 'Administração',
            modality: 'Presencial',
            description: "A capacidade de gerenciar é uma exigência do nosso tempo, e o mercado de trabalho para este profissional é amplo e está em expansão. O administrador pode contribuir com organizações públicas e privadas em diversas áreas de atuação.",
            url: "https://imagens.grupointegrado.br/img/banners/1648496018000000.jpg",
            type: 'Graduação',
            investmentvalue: 1300.0,
            numberofinstallments: 12,
        },
        {
            name: 'Administração',
            modality: 'A Distancia',
            description: "A capacidade de gerenciar é uma exigência do nosso tempo, e o mercado de trabalho para este profissional é amplo e está em expansão. O administrador pode contribuir para o sucesso e crescimento sustentável das organizações, otimizando processos, tomando decisões estratégicas e liderando equipes de forma eficaz. ",
            url: "https://imagens.grupointegrado.br/img/banners/1650374326000000.jpg",
            type: 'Graduação',
            investmentvalue: 1300.0,
            numberofinstallments: 12,
        },
        {
            name: 'Agronomia',
            modality: 'Presencial',
            description: "O curso de Agronomia é focado em aumentar a compreensão da agropecuária e melhorar as práticas agrícolas e zootécnicas, por meio de tecnologias que proporcionem uma otimização dos sistemas produtivos. A utilização de novas e modernas formas de se praticar a agricultura e a pecuária, levando-se em consideração recentes métodos de conservação do solo e da água, garantem uma produção de alimentos, combustíveis e fibras de forma mais eficiente e economicamente viável, beneficiando as pessoas e o meio ambiente. ",
            url: "https://imagens.grupointegrado.br/img/banners/1648496447000000.jpg",
            type: 'Graduação',
            investmentvalue: 50000.0,
            numberofinstallments: 24,
        },
        {
            name: 'Arquitetura e Urbanismo',
            modality: 'Presencial',
            description: "Com a evolução da qualidade do ambiente construído em um mundo contemporâneo de mudanças constantes que impactam diretamente sobre a maneira em que tais lugares são pensados, configurados, projetados e construídos, o papel do Arquiteto",
            url: "https://imagens.grupointegrado.br/img/banners/1648496630000000.jpg",
            type: 'Graduação',
            investmentvalue: 1300.0,
            numberofinstallments: 12,
        },
        {
            name: 'Ciências Contábeis',
            modality: 'Presencial',
            description: "Ciências contábeis é a área que cuida das contas de uma empresa, por meio do registro e do controle das receitas, das despesas e dos lucros. Tem por objetivo o estudo das variações quantitativas e qualitativas ocorridas no patrimônio das entidades.",
            url: "https://imagens.grupointegrado.br/img/banners/1648496898000000.jpg",
            type: 'Graduação',
            investmentvalue: 5224.0,
            numberofinstallments: 12,
        },
        {
            name: 'História',
            modality: 'A Distancia',
            description: "O profissional licenciado em História é capacitado para entender a formação da população através dos fatos históricos, buscando formar cidadãos preparados, tanto no Ensino",
            url: "https://imagens.grupointegrado.br/img/banners/1650375122000000.jpg",
            type: 'Graduação',
            investmentvalue: 5524.0,
            numberofinstallments: 12,
        },
        {
            name: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
            modality: 'A Distancia',
            description: "O curso de Tecnologia em Análise e Desenvolvimento de Sistemas vem preencher a demanda por profissionais especializados na área de informática e sistemas de informação. É projetado para responder às novas tendências do mercado que cada vez mais exige trabalhadores com perfil diferenciado dotado de competências e habilidades específicas.",
            url: "https://imagens.grupointegrado.br/img/banners/1696278674000000.webp",
            type: 'Graduação',
            investmentvalue: 10500.0,
            numberofinstallments: 12,
        },
        {
            name: 'Clínica Médica de Cães e Gatos',
            modality: 'Presencial',
            description: "Clínica Médica de Cães e Gatos é uma jornada abrangente e especializada projetada para profissionais da área veterinária, estudantes e entusiastas que desejam aprofundar seus conhecimentos na medicina clínica voltada para os animais de estimação mais comuns: cães e gatos.",
            url: "https://imagens.grupointegrado.br/img/banners/1651574858000000.png",
            type: 'Pós-Graduação',
            investmentvalue: 8982.0,
            numberofinstallments: 24,
        },
        {
            name: 'Estética: Procedimentos Invasivos',
            modality: 'Presencial',
            description: "O curso de Pós-Graduação em Estética: Procedimentos Invasivos do Centro Universitário Integrado é destinado a Biomédicos e Farmacêuticos que, depois de especializados, poderão realizar procedimentos injetáveis para o tratamento de disfunções faciais, capilares e corporais de fins estéticos.",
            url: "https://imagens.grupointegrado.br/img/banners/1651588273000000.png",
            type: 'Pós-Graduação',
            investmentvalue: 8982.0,
            numberofinstallments: 24,
        },
        {
            name: 'Psicoterapias',
            modality: 'Presencial',
            description: "Compreender o funcionamento da psique humana é um desafio que permeou o trabalho de alguns dos maiores pesquisadores e intelectuais ao longo do tempo. Toda a coletânea de obras que nos auxilia no sentido de compreender quem somos e como existimos fazem parte, em maior ou menor grau, de diversas formas de descrever esse magnífico atributo que é a Mente Humana, que nos identifica, nos edifica e nos transforma.",
            url: "https://imagens.grupointegrado.br/img/banners/1679402211000000.webp",
            type: 'Pós-Graduação',
            investmentvalue: 17280.0,
            numberofinstallments: 24,
        },
        {
            name: 'Análises Clínicas',
            modality: 'A Distancia',
            description: "O curso de Pós-graduação em Análises Clínicas do Centro Universitário Integrado tem como objetivo proporcionar a capacitação de profissionais para a atuação nas diversas áreas da Análises Clínicas de forma segura e com qualidade, visando maior especificidade, sensibilidade e rapidez na realização dos testes.",
            url: "https://imagens.grupointegrado.br/img/banners/1651574239000000.png",
            type: 'Pós-Graduação',
            investmentvalue: 1782.0,
            numberofinstallments: 18,
        },
        {
            name: 'Banco de Dados',
            modality: 'A Distancia',
            description: "O Curso de Pós-Graduação em Banco de Dados do Centro Universitário Integrado busca capacitar profissionais por meio da abordagem de processos, técnicas e metodologias atuais, utilizadas para a modelagem e programação para banco de dados, auxiliando no aprimoramento de competências e habilidades profissionais para uma atuação no mercado com eficiência e qualidade.",
            url: "https://imagens.grupointegrado.br/img/banners/1658498555000000.png",
            type: 'Pós-Graduação',
            investmentvalue: 2227.50,
            numberofinstallments: 18,
        },
        {
            name: 'Desenvolvimento de Jogos Digitais',
            modality: 'A Distancia',
            description: "O curso de pós-graduação em  Desenvolvimento de Jogos Digitais do Centro Universitário Integrado busca capacitar profissionais por meio da abordagem de técnicas e metodologias atuais, utilizadas para o desenvolvimento de jogos digitais, auxiliando no aprimoramento de competências e habilidades essenciais para uma atuação de excelência.",
            url: "https://imagens.grupointegrado.br/img/banners/1658499336000000.png",
            type: 'Pós-Graduação',
            investmentvalue: 2227.50,
            numberofinstallments: 18,
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
