const controlModule = ((document, drawModule) => {
  const btn = document.getElementById('start-button');
  btn.addEventListener('click', () => {
    drawModule.init();
  });

  document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 37:
        if (direction !== 'right') {
          direction = 'left';
        }
        break;
      case 39:
        if (direction !== 'left') {
          direction = 'right';
        }
        break;
      case 38:
        if (direction !== 'down') {
          direction = 'up';
        }
        break;
      case 40:
        if (direction !== 'up') {
          direction = 'down';
        }
        break;
    }
  });
})(document, drawModule);
