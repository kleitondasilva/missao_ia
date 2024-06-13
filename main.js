const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('caixa-perguntas');
const caixaAlternativas = document.querySelector('caixa-alternativas');
const caixaResultado = document.querySelector('caixa-resultado');
const textoResultado = document.querySelector('texto-resultado');

const perguntas = [
    {
        enunciado: "Assim que saiu da escola voce se depara com uma tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realista. Qual o primeiro pensamento?",
        alternativas: [
            "Isso é assustador!",
            "Isso é maravilhoso!"
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligencia Artificial (IA), uma professora da escola decidiu fazer uma sequencia de aulas sobre esta tecnologia. No fim de uma aula ela pede que voce escreva um trabalho sobre IA em sala de aula. Qual atitude voce toma?",
        alternativas: [
            "Utiliza uma ferramenta de busca na internet que utuliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilita o entendimento. ",
            "escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos proprios  sobre o tema."
        ]
    },
    {
        enunciado:"Após a elaboração do trabalho, a professora realizou um debate entre a turama para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como voce se posiciona.",
        alternativas: [
            "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            "Me preocupo com as pessoas que perderam os seus empregos para máquinas e defendem a importáncia de proteger os trabalhadores."
        ]
    },
]