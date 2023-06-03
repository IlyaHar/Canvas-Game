const canvas = document.querySelector('#canvas'),
   ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

const circle = {
   x: 100,
   y: 60,
   size: 30,
   dx: 4,
   dy: 3
}

function drowCircle() {
   ctx.beginPath();
   ctx.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
   ctx.fillStyle = "green";
   ctx.fill();3
}

// drowCircle();

function update() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   drowCircle();

   circle.x += circle.dx;
   circle.y += circle.dy;

   if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
      circle.dx *= -1;
   }

   // if (circle.x - circle.size < 0) {
   //    circle.dx *= -1;
   // }

   if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
      circle.dy *= -1;
   }
   requestAnimationFrame(update);
}

update(); 