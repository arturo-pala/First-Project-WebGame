// select canvas element
const canvas = document.getElementById("pong");

// getContext of canvas = methods and properties to draw and do a lot of thing to the canvas
const ctx = canvas.getContext('2d');

const ball = {
    x:canvas.width/2,
    y:canvas.height/2,
    radius:10,
    velocityX:6,
    velocityY:6,
    speed:8,
    color: white
}

const user= {
    x:1,
    y:(canvas.height - 100)/2,
    width:11,
    height:100,
    score:0,
    color:white
}

const com = {
    x:canvas.width - 10,
    y:(canvas.height - 100)/2,
    width:11,
    height:100,
    score:0,
    color:white
}

const net = {
    x:(canvas.width - 2)/2,
    y:0,
    height:10,
    width:2,
    color:white
}

function drawRect(x, y, w, h, color){
    ctx.fillstyle = color;
    ctx.fillRect(x, y, w, h)
}

function drawArc(x, y, r, color){
    ctx.fillstyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}

canvas.addEventListener("mousemove", getMousePos);

function getMousePos(evt){
    let rect = canvas.getBoundingClientRect();

    user.y = evt.clientY - rect.top - user,height/2;
}

function resetBall(){
    ball.x = canvas.width/2;
    ball.y = canvas,height/2;
    ball.velocityX = -ball.velocityX;
    ball.speed = 8;
}

function drawNet(){
    for(let i = 0; i <=canvas.height; i+15){
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

function drawText(text,x,y){
    ctx.fillstyle = white;
    ctx.font = "75px fantasy";
    ctx.fillText(text, x, y);
}

function collision(b,p){
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    
}