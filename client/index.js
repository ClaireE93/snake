const canvas = document.getElementById('canvas');
const button = document.getElementById('start-button');
const ctx = canvas.getContext('2d');
const snakeSize = 10;
const w = 350;
const h = 350;
let score = 0;
const snake = [];
const food = {};

const drawModule = (() => {
  const bodySnake = (x, y) => {
    ctx.fillStyle = 'green';
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    ctx.strokeStyle = 'darkgreen';
    ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
  };

  const pizza = (x, y) => {
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
    for (let i = 0; i < length; i++) {
      snake.push({ x: i, y: 0 });
    }
  };

  const createFood = () => {
    food.x = Math.floor(Math.random() * 31);
    food.y = Math.floor(Math.random() * 31);

    snake.forEach((coord) => {
      if (coord.x === food.x && coord.y === food.y) {
        food.x = Math.floor(Math.random() * 31);
        food.y = Math.floor(Math.random() * 31);
      }
    });
  };

  const checkCollision = (arr, x, y) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].x === x && arr[i].y === y) {
        return true;
      }
    }
    return false;
  };

  const paint = () => {
    ctx.fillStyle = 'lightgrey';
    ctz.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'black';
    ctz.storkeRect(0, 0, w, h);

    button.setAttribute('disabled', true);

    const snakeX = snake[0].x;
    const snakeY = snake[0].y;

    if (direction == 'right') {
        snakeX++;
    } else if (direction == 'left') {
        snakeX--;
    } else if (direction == 'up') {
        snakeY--;
    } else if (direction == 'down') {
        snakeY++;
    }

    if (snakeX === -1 || snakeX = w / snakeSize
        || snakeY === -1 || snakeY = h / snakeSize
        || checkCollision(snakeX, snakeY, snake)) {
      button.removeAttribute('disabled', true);
      ctx.clearRect(0, 0, w, h);
      gameloop = clearInterval(gameloop);
    }
    let tail;
    if (snakeX === food.x && snakeY === food.y) {
      tail = {
        x: snakeX,
        y: snakeY,
      };
      score++;
      createFood();
    } else {
      tail = snake.pop();
      tail.x = snakeX;
      tail.y = snakeY;
    }
    snake.unshift(tail);

    for (let i = 0; i < snake.length; i++) {
      bodySnake(snake[i].x, snake[i].y);
    }

    pizza(food.x, food.y);
    scoreText();
  };

  const init = () => {
    direction = 'down';
    drawSnake();
    createFood();
    gameloop = setInterval(paint, 80);
  };

  return { init }
})();
