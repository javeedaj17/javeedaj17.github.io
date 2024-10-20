let score = 0;
let gameInterval;
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');

document.getElementById('startGame').addEventListener('click', startGame);

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    gameArea.innerHTML = ''; // Clear previous circles
    gameInterval = setInterval(createCircle, 1000); // Create a new circle every second
}

function createCircle() {
    const circle = document.createElement('div');
    const size = Math.random() * (100 - 30) + 30; // Random size between 30 and 100
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = getRandomColor();
    circle.classList.add('circle');

    // Random position within the game area
    circle.style.top = `${Math.random() * (gameArea.clientHeight - size)}px`;
    circle.style.left = `${Math.random() * (gameArea.clientWidth - size)}px`;

    circle.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        circle.remove(); // Remove the circle on click
    });

    gameArea.appendChild(circle);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
