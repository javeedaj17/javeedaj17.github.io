const colorGrid = document.getElementById('colorGrid');
const message = document.getElementById('message');
const startBtn = document.getElementById('start-btn');

const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A6', '#33D4FF', '#FFD433', '#A633FF', '#33FFA3'];
let targetColor;
let gameActive = false;

function generateGrid() {
    colorGrid.innerHTML = '';
    const randomColors = [...colors].sort(() => 0.5 - Math.random());
    randomColors.forEach(color => {
        const colorCell = document.createElement('div');
        colorCell.classList.add('color-cell');
        colorCell.style.backgroundColor = color;
        colorCell.addEventListener('click', () => checkColor(color));
        colorGrid.appendChild(colorCell);
    });
}

function startGame() {
    gameActive = true;
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    message.innerHTML = `Find this color: <span style="color: ${targetColor}">${targetColor}</span>`;
    generateGrid();
}

function checkColor(selectedColor) {
    if (!gameActive) return;
    
    if (selectedColor === targetColor) {
        message.textContent = 'Correct! You found the color!';
        gameActive = false;
        startBtn.textContent = 'Play Again';
    } else {
        message.textContent = 'Try again!';
    }
}

startBtn.addEventListener('click', () => {
    startGame();
    startBtn.textContent = 'Restart Game';
});
