const perguntas = [
    //1
    {
        pergunta: "Qual a instituição internacional criada em 1945 após a 2ª Guerra Mundial, com o principal objetivo de manter a paz e a segurança no mundo?",
        opcoes: ["ONU", "OMS", "FAO", "PMA"],
        resposta: "ONU"
    },
    
    //2
    {
        pergunta: "Qual é a instância máxima de administração executiva, geralmente reconhecida como a liderança de um estado ou uma nação?",
        opcoes: ["Nação", "Estado", "Governo", "País"],
        resposta: "Governo"
    },

    //3
    {
        pergunta: "Os acordos entre dois países que se baseiam em variados interesses como: econômicos, comércio, imigração, segurança, segurança internacional, etc, são chamados de relacões:",
        opcoes: ["Bilaterais", "Unilaterais", "Multilaterais", "Sociais"],
        resposta: "Bilaterais"
    },

    //4
    {
        pergunta: "Quais são as três maiores potências mundiais, no ponto de vista econômico?",
        opcoes: ["Estados Unidos, China e Alemanha.", "Estados Unidos, China e Rússia.", "Estados Unidos, Brazil e França.", "França, Canadá e Portugal"],
        resposta: "Estados Unidos, China e Alemanha."
    },

    //5
    {
        pergunta: "Qual é o país com a maior extensão territorial?",
        opcoes: ["Holanda", "Índia", "China", "Rússia"],
        resposta: "Rússia"
    },

    {
        pergunta: "FIM",
        opcoes: ["Terminar"],
    },
    //Adicione mais perguntas aqui...
];

const perguntaElemento = document.getElementById("pergunta");
const opcoesElemento = document.getElementById("opcoes");
const resultadoElemento = document.getElementById("resultado");

let indicePerguntaAtual = 0;

function carregarPergunta() {
    const perguntaAtual= perguntas[indicePerguntaAtual];
    perguntaElemento.textContent = perguntaAtual.pergunta;

    opcoesElemento.innerHTML = "";
    perguntaAtual.opcoes.forEach(opcao => {
        const botao = document.createElement("button")
        botao.textContent = opcao;
        botao.addEventListener("click", () => verificarResposta(opcao));
        opcoesElemento.appendChild(botao);
    })
}

function verificarResposta(respostaSelecionada) {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    if (respostaSelecionada === perguntaAtual.resposta) {
        resultadoElemento.textContent = "Resposta correta!";
        resultadoElemento.className = "correto";
    } else {
        resultadoElemento.textContent = "Resposta incorreta. A resposta correta é: " + perguntaAtual.resposta;
        resultadoElemento.className = "incorreto";
    } 


    //Avança para a próxima pergunta ou finaliza o Quiz
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        setTimeout(carregarPergunta, 2000); //carrega apróxima pergunta após 2s
    } else {
        resultadoElemento.textContent = "Quiz concluído! (clique F5 para reiniciar)";
        resultadoElemento.className = "";
    }
}

//Carrega a primeira pergunta quando a página carrega
carregarPergunta();