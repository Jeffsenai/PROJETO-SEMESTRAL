document.addEventListener("DOMContentLoaded", () => {
    const videoContainer = document.querySelector('.video');
    const imagemEsquerda = document.querySelector('.imagemEsquerda img');
    const imagemDireita = document.querySelector('.imagemDireita img');
    const btnEsquerda = document.querySelector('.seta-esquerda');
    const btnDireita = document.querySelector('.seta-direita');

    const videos = [
        {
            src: 'https://drive.google.com/file/d/1ZEKQK-GhhnS_5optQIGqQMEzPwrfLnxO/view?usp=sharing',
            title: 'Libras para iniciantes - Academia de Libras',
            description: 'Tempo de duração: 17 minutos',
            imgEsquerda: 'Imagens/imagemEsquerda.png',
            imgDireita: 'Imagens/imagemDireita.png'
        },
        {
            src: 'video2.mp4',
            title: 'Os sinais mais utilizados no cotidiano',
            description: 'Tempo de duração: 24 minutos',
            imgEsquerda: 'Imagens/imagemEsquerda2.png',
            imgDireita: 'Imagens/imagemDireita2.png'
        },
        {
            src: 'video3.mp4',
            title: 'Os 100 Verbos mais comuns em Libras',
            description: 'Tempo de duração: 27 minutos',
            imgEsquerda: 'Imagens/imagemEsquerda3.png',
            imgDireita: 'Imagens/imagemDireita3.png'
        }
    ];

    let currentVideo = 0;

    function atualizarCarrossel() {
        videoContainer.style.opacity = 0;
        imagemEsquerda.style.opacity = 0;
        imagemDireita.style.opacity = 0;

        // Animação de 3s
        setTimeout(() => {
            const videoElement = videoContainer.querySelector('video');
            const titleElement = videoContainer.querySelector('h1');
            const descriptionElement = videoContainer.querySelector('p');

            
            videoElement.src = videos[currentVideo].src;
            titleElement.textContent = videos[currentVideo].title;
            descriptionElement.textContent = videos[currentVideo].description;
            imagemEsquerda.src = videos[currentVideo].imgEsquerda;
            imagemDireita.src = videos[currentVideo].imgDireita;

            videoContainer.style.opacity = 1;
            imagemEsquerda.style.opacity = 1;
            imagemDireita.style.opacity = 1;
        }, 300);
    }

    // setinha
    btnDireita.addEventListener('click', () => {
        currentVideo = (currentVideo + 1) % videos.length; 
        atualizarCarrossel();
    });

    btnEsquerda.addEventListener('click', () => {
        currentVideo = (currentVideo - 1 + videos.length) % videos.length;
        atualizarCarrossel();
    });

    atualizarCarrossel();
});
