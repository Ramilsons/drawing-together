let socket;

function setup() {
  createCanvas(350, 350);
  background('#1b1b1b');

  socket = io.connect('http://localhost:3000/');
  socket.on('mouseOpponent', newDrawing);
}

function newDrawing(data) {
  noStroke();
  fill(255, 0, 100);
  ellipse(data.x, data.y, 15, 15);
}

function mouseDragged() {
  let dataMouse = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', dataMouse);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 15, 15);
}
