const bancoDeDados = {
        "oi": {
            video: "Videos/oi.mp4",
        },
        "tudo bem": {
            video: "Videos/tudo_bem.mp4",
        },
        "quarta": {
            video: "Videos/quarta.mp4",
        },
        "sim": {
            video: "Videos/sim.mp4",
        },
        "não": {
            video: "Videos/nao.mp4",
        },
        "bom dia": {
            video: "Videos/bom_dia.mp4",
        },
        "boa tarde": {
            video: "Videos/boa_tarde.mp4",
        },
        "boa noite": {
            video: "Videos/boa_noite.mp4",
        },
        "tchau": {
            video: "Videos/tchau.mp4",
        },
        "amor": {
            video: "Videos/amor.mp4",
        },
        "família": {
            video: "Videos/familia.mp4",
        },
        "amigo": {
            video: "Videos/amigo.mp4",
        },
        "escola": {
            video: "Videos/escola.mp4",
        },
        "trabalho": {
            video: "Videos/trabalho.mp4",
        },
        "ajuda": {
            video: "Videos/ajuda.mp4",
        },
        "saúde": {
            video: "Videos/saude.mp4",
        },
        "casa": {
            video: "Videos/casa.mp4",
        },
        "comida": {
            video: "Videos/comida.mp4",
        },
        "água": {
            video: "Videos/agua.mp4",
        },
        "banheiro": {
            video: "Videos/banheiro.mp4",
        },
        "dormir": {
            video: "Videos/dormir.mp4",
        },
        "sonho": {
            video: "Videos/sonho.mp4",
        },
        "estudo": {
            video: "Videos/estudo.mp4",
        },
        "feliz": {
            video: "Videos/feliz.mp4",
        },
        "triste": {
            video: "Videos/triste.mp4",
        },
        "cansado": {
            video: "Videos/cansado.mp4",
        },
        "medo": {
            video: "Videos/medo.mp4",
        },
        "raiva": {
            video: "Videos/raiva.mp4",
        },
        "rápido": {
            video: "Videos/rapido.mp4",
        },
        "devagar": {
            video: "Videos/devagar.mp4",
        },
        "hoje": {
            video: "Videos/hoje.mp4",
        },
        "ontem": {
            video: "Videos/ontem.mp4",
        },
        "amanhã": {
            video: "Videos/amanha.mp4",
        },
        "agora": {
            video: "Videos/agora.mp4",
        },
        "depois": {
            video: "Videos/depois.mp4",
        },
        "quem": {
            video: "Videos/quem.mp4",
        },
        "o que": {
            video: "Videos/o_que.mp4",
        },
        "quando": {
            video: "Videos/quando.mp4",
        },
        "onde": {
            video: "Videos/onde.mp4",
        },
        "como": {
            video: "Videos/como.mp4",
        },
        "qual": {
            video: "Videos/qual.mp4",
        },
        "porque": {
            video: "Videos/porque.mp4",
        },
        "saudade": {
            video: "Videos/saudade.mp4",
        },
        "visita": {
            video: "Videos/visita.mp4",
        },
        "parabéns": {
            video: "Videos/parabens.mp4",
        },
        "desculpa": {
            video: "Videos/desculpa.mp4",
        },
        "tempo": {
            video: "Videos/tempo.mp4",
        },
        "esperar": {
            video: "Videos/esperar.mp4",
        },
        "brincar": {
            video: "Videos/brincar.mp4",
        },
        "ler": {
            video: "Videos/ler.mp4",
        }
    }
    

let inputTxt = document.querySelector('#container__inputtxt');
let btnTxt = document.querySelector('#container__btn');
let resultado = document.querySelector('#container__result');

// BUSCA 
btnTxt.addEventListener('click', () => {
    let palavra = inputTxt.value.toLowerCase();  
    if (palavra === '') {
        resultado.innerHTML = `<p id="container__significado">Escreva a palavra que deseja aprender em Libras!</p>`;
    } else if (bancoDeDados[palavra]) {
        // Se a palavra existe no "banco de dados"
        const { imagem, video } = bancoDeDados[palavra];
        resultado.innerHTML = `
            <video src="${video}" controls style="width: 400px; height: auto; margin-top: 10px; margin left: 45px"></video>
            <p  class="textoABAIXO">"${palavra}" em LIBRAS</p>
        `;
    } else {
        
        // MENSAGEM DE ERRO
        resultado.innerHTML = `<p class="erro" id="container__significado"><span>Esta palavra</span> ainda não se encontra em nosso banco de dados.</p>`;
    }
});

