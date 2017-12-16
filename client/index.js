const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const snakeSize = 10;
const w = 350;
const h = 350;
let score = 0;
let snake;
let food;

const drawModule = (function() {
  const bodySnake = (x, y) => {
    ctx.fillStyle = 'green';
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.strokeStyle = 'darkgreen';
    ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
  };

  const pizza = function(x, y) => {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = 'red';
    ctx.fillRect(x * snakeSize + 1, y * snakeSize + 1, snakeSize - 2, snakeSize - 2);
  };

  const scoreText = () => {
    const score = `Score: ${score}`;
    ctx.fillStyle = 'blue';
    ctx.fillText(score, 145, h - 5);
  };

  const drawSnake = () => {
    const length = 4;
    const snake = [];
    for (let i = 0; i < length; i++) {
      snake.push({ x: i, y: 0 });
    }
  }
})();
