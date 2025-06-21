const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let cameraX = 0;
const player = { x: 100, y: 300, width: 50, height: 50, color: 'red', speed: 5 };

function drawCheckerboard(offsetX) {
  const size = 50;
  const rows = Math.ceil(canvas.height / size);
  const cols = Math.ceil(canvas.width / size) + 1;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const realX = x * size - (offsetX % size);
      const realY = y * size;
      const gray = ((x + y) % 2 === 0) ? '#ccc' : '#888';
      ctx.fillStyle = gray;
      ctx.fillRect(realX, realY, size, size);
    }
  }
}

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function update() {
  cameraX += player.speed;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCheckerboard(cameraX);
  drawPlayer();
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
