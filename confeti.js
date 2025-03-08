// Função para criar fogos de artifício
const createFirework = () => {
    const fireworkContainer = document.querySelector('.fireworks');
    const firework = document.createElement('div');
    firework.classList.add('firework');
    
    // Definir a posição inicial dos fogos de artifício
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;

    fireworkContainer.appendChild(firework);

    // Remover o fogo de artifício após a animação
    firework.addEventListener('animationend', () => {
        firework.remove();
    });
};

// Função para criar corações caindo
const createHeart = () => {
    const heartContainer = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Definir a posição inicial dos corações
    heart.style.left = `${Math.random() * 100}%`;

    heartContainer.appendChild(heart);

    // Remover o coração após a animação
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
};

// Iniciar os fogos de artifício e corações após a página carregar
window.onload = () => {
    setInterval(createFirework, 500); // Criar fogos de artifício a cada 500ms
    setInterval(createHeart, 300); // Criar corações a cada 300ms
};
