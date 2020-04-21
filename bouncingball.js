const canvas = document.querySelector("#canvas");
const c = canvas.getContext("2d");
const tx = window.innerWidth;
const ty = window.innerHeight;
var grav = 0.99;
canvas.height = ty;
canvas.width = tx;

var colour = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function randomColour() {
    return (
      "rgba(" +
      Math.round(Math.random() * 250) +
      "," +
      Math.round(Math.random() * 250) +
      "," +
      Math.round(Math.random() * 250) +
      "," +
      Math.ceil(Math.random() * 10) / 10 +
      ")"
    );
  }

function Ball()
{
    this.color = randomColour();
    this.radius = Math.random() * 20 + 14;
    this.x = Math.random() * (tx - this.radius * 2) + this.radius;
    this.y = Math.random() * (ty - this.radius);
    this.dy = Math.random() * 2;
    this.dx = Math.round((Math.random() - 0.5) * 10);
    this.vel = Math.random() /5;

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
    {
        bal[i].update();
        bal[i].y += bal[i].dy;
        bal[i].x += bal[i].dx;

        if (bal[i].y + bal[i].radius >= ty)
        {
            bal[i].dy = -bal[i].dy * grav;
        }
        else
        {
            bal[i].dy += bal[i].vel;
        }    
        if(bal[i].x + bal[i].radius > tx)
        {
            bal[i].x = bal[i].radius;
        }
        else if(bal[i].x - bal[i].radius < 0)
        {
            bal[i].x = tx - bal[i].radius;
        }
    }
}

drawingBalls();

setInterval(function() {
    bal.push(new Ball());
    bal.splice(0, 1);
  }, 400);