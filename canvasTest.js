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

document.addEventListener("DOMContentLoaded", function(){
  drawRectangles();
  drawTriangles();
});
