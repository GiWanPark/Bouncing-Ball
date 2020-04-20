const canvas = document.querySelector("#canvas");
const c = canvas.getContext("2d");
const tx = window.innerWidth;
const ty = window.innerHeight;
canvas.height = ty;
canvas.width = tx;

var colour = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function randomColour()
{
    return "#" + 
    colour[Math.floor(Math.random() * 100) % 15] + 
    colour[Math.floor(Math.random() * 100) % 15] + 
    colour[Math.floor(Math.random() * 100) % 15] + 
    colour[Math.floor(Math.random() * 100) % 15] + 
    colour[Math.floor(Math.random() * 100) % 15] + 
    colour[Math.floor(Math.random() * 100) % 15];
}

function Ball()
{
    this.color = randomColour();
    this.radius = Math.random() * 20 + 14;
    this.x = Math.random() * (tx - this.radius * 2) + this.radius;
    this.y = Math.random() * (ty - this.radius);

    this.update = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = this.color;
        c.fill();
        //c.stroke();
    };
}

var bal = [];
for (var i=0; i<50; i++){
    bal.push(new Ball());
}

function drawingBalls()
{
    requestAnimationFrame(drawingBalls);
    c.clearRect(0,0,tx,ty);
    for(i=0; i<50; ++i)
        bal[i].update();
}

drawingBalls();

setInterval(function() {
    bal.push(new Ball());
    bal.splice(0, 1);
  }, 400);