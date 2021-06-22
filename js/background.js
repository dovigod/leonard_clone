const canvas  =document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const offscreen = canvas.transferControlToOffscreen();

let worker = new Worker('./js/worker.js');


worker.postMessage({canvas: offscreen , width : canvas.width , height: canvas.height}, [offscreen]);


/*
const width = canvas.width;
const height = canvas.height;
const radius = 200;
const moveTrace = 550;
let deg = -180;
let trideg= deg * Math.PI / 180;
let x = radius * Math.cos(trideg);
let y = radius * Math.sin(trideg);


const draw = () =>{

    ctx.beginPath();
    ctx.strokeStyle ='black';
    ctx.fillStyle = 'yellow';
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}
const update = () =>{
    deg += 0.3;
    trideg = deg * Math.PI / 180;
    x = moveTrace * Math.cos(trideg) + width/2;
    y = moveTrace * Math.sin(trideg) + height/2;

}

const animate = () =>{
    ctx.clearColor = 'black';
    ctx.clearRect(0,0,width,height);
    draw();
    update();
    requestAnimationFrame(animate);
}

animate();
*/
