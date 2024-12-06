let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let palavras = [];
let palavraImagem;
let jogoAutomatico = true;

carregaListaAutomatica();
criarPalavraSecreta();

function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    palavraImagem = palavras[indexPalavra].imagem; // Carrega o caminho da imagem correspondente

    // Exibe a imagem correspondente
    const imagemDiv = document.getElementById("imagem");
    imagemDiv.innerHTML = `<img src="${palavraImagem}" alt="${palavraSecretaSorteada}" class="img-fluid">`;
}

montarPalavraNaTela();

function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML += "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>";
            } else {
                listaDinamica[i] = "&nbsp;";
                palavraTela.innerHTML += "<div class='letras'>" + listaDinamica[i] + "</div>";
            }
        } else {
            palavraTela.innerHTML +=
                palavraSecretaSorteada[i] == " "
                    ? "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
                    : "<div class='letras'>" + listaDinamica[i] + "</div>";
        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla, condicao) {
    document.getElementById(tecla).style.background = condicao ? "darkblue" : "black";
    document.getElementById(tecla).style.color = "white";
}

function comparalistas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra);
    if (pos < 0) {
        tentativas--;
        carregaImagemForca();

        if (tentativas == 0) {
            abreModal("OPS!", `Não foi dessa vez ... A palavra secreta era <br>${palavraSecretaSorteada}`);
            piscarBotaoJogarNovamente(true);
        }
    } else {
        mudarStyleLetra("tecla-" + letra, true);
        for (let i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    if (listaDinamica.join("") === palavraSecretaSorteada) {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
        piscarBotaoJogarNovamente(true);
    }
}

function carregaImagemForca() {
    const imagens = [
        "./img/mae.png",
        "./img/homem.png",
        "./img/amigo.png",
    
    ];
    document.getElementById("imagem").style.backgroundImage = `url('${imagens[6 - tentativas]}')`;
}

function abreModal(titulo, mensagem) {
    document.getElementById("exampleModalLabel").innerText = titulo;
    document.getElementById("modalBody").innerHTML = mensagem;
    $("#myModal").modal({ show: true });
}

let bntReiniciar = document.querySelector("#btnReiniciar");
bntReiniciar.addEventListener("click", function () {
    jogarNovamente = false;
    location.reload();
});

function carregaListaAutomatica() {
    palavras = [
        {
            nome: "MAE",
            imagem: "./img/mae.png",
        },
        {
            nome: "HOMEM",
            imagem: "./img/homem.png",
        },
        {
            nome: "AMIGO",
            imagem: "./img/amigo.png",
        },
    ];
}
