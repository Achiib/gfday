function showSurprise() {
    const surpriseElement = document.getElementById('surprise');
    surpriseElement.classList.remove('hidden');
    surpriseElement.classList.add('animated');
    setTimeout(() => {
        surpriseElement.style.color = getRandomColor();
    }, 500);
    releaseHearts();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function releaseHearts() {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heartsContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
