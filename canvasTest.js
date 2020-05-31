const drawRectangles = function() {
  const canvas = document.getElementById('canvas-1');
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = 'rgb(200,0,0)';
  ctx.fillRect(10, 10, 40, 40);

  ctx.fillStyle = 'rgb(0,0,200, 0.5)';
  ctx.fillRect(30, 30, 50, 50);
}

const drawTriangles = function() {
  const canvas = document.getElementById('canvas-2');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
}

const drawCircles = function() {
  const canvas = document.getElementById('canvas-3');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 外の円
  ctx.moveTo(110, 75);
  ctx.arc(75, 75, 35, 0, Math.PI, false);  // 口 (時計回り)
  ctx.moveTo(65, 65);
  ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左目
  ctx.moveTo(95, 65);
  ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右目
  ctx.stroke();
}

const drawLines = function() {
  const canvas = document.getElementById('canvas-4');
  const ctx = canvas.getContext('2d');

  // Filled triangle
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(105, 25);
  ctx.lineTo(25, 105);
  ctx.fill();

  // Stroked triangle
  ctx.beginPath();
  ctx.moveTo(125, 125);
  ctx.lineTo(125, 45);
  ctx.lineTo(45, 125);
  ctx.closePath();
  ctx.stroke();
}

const draw = function(angle) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const width = 200;
  const height = 200;

  ctx.clearRect(0,0,width,height)

  ctx.beginPath();
  ctx.moveTo(0, 180);
  ctx.lineTo(width, 180);

  const leftPadding = 30;

  let x = (angle / 180.0) * Math.PI;
  x = height / Math.tan(x) + leftPadding;

  ctx.moveTo(leftPadding, 180);
  ctx.lineTo(x, 0);
  ctx.closePath();
  ctx.stroke();
}

document.addEventListener("DOMContentLoaded", function(){
  drawRectangles();
  drawTriangles();
  drawCircles();
  drawLines();

  const element = document.getElementById('angle');

  element.addEventListener('input', function (evt) {
    draw(this.value);
  });
});
