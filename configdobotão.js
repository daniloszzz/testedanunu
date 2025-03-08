const naoButton = document.getElementById('nao');

// Define os limites
const minX = 50; // Limite mínimo no eixo X (pode ajustar conforme necessário)
const maxX = window.innerWidth - naoButton.offsetWidth - 50; // Limite máximo no eixo X
const minY = 50; // Limite mínimo no eixo Y
const maxY = window.innerHeight - naoButton.offsetHeight - 50; // Limite máximo no eixo Y

// Define a posição inicial no centro da tela
const centerX = (window.innerWidth - naoButton.offsetWidth) / 2;
const centerY = (window.innerHeight - naoButton.offsetHeight) / 2;
naoButton.style.left = `650px`;
naoButton.style.top = `250px`;

const moveButton = () => {
    let randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    let randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    naoButton.style.left = `${randomX}px`;
    naoButton.style.top = `${randomY}px`;
};

naoButton.addEventListener('mouseover', moveButton);
naoButton.addEventListener('touchstart', moveButton);

// Adiciona um listener para ajustar os limites e a posição do botão quando a janela for redimensionada
window.addEventListener('resize', () => {
    const maxX = window.innerWidth - naoButton.offsetWidth - 50;
    const maxY = window.innerHeight - naoButton.offsetHeight - 50;
    const centerX = (window.innerWidth - naoButton.offsetWidth) / 2;
    const centerY = (window.innerHeight - naoButton.offsetHeight) / 2;
    naoButton.style.left = `${centerX}px`;
    naoButton.style.top = `${centerY}px`;
});
