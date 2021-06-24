const mainContent  =document.getElementsByClassName('title_container')[0];
const footer = document.getElementsByClassName('footer')[0];
let rotationValue = 0; // -5 ~ 5
let trans_X =0; // -10 ~ 10
let trans_Z = 0;  // 0 ~ 5
let cnt = 0;
let scaleRate = 0;
let ball_X = 0;
const standardX = window.innerWidth/2;
let enterFlag =0;
let ballEvent = 0;
let pointer = {
    x: 0,
    mx: 0,
    speed: 0.035
}
let tmp;

const ball = footer.getElementsByClassName('ball')[0];
const left = footer.getElementsByClassName('footer_left_container')[0];
const right = footer.getElementsByClassName('footer_right_container')[0];

const message = footer.getElementsByClassName('f_message');
const underline = footer.getElementsByClassName('footer_underline');




const eventListeners = () =>{
    window.addEventListener('mousemove' , e =>{
        pointer.x = e.clientX - standardX;
        pointer.mx += (pointer.x-pointer.mx)*pointer.speed;
        update();
    
    })
}


const update = () =>{
    mainContent.style.perspective = '300px'


    scaleRate = pointer.x > 0 ? -pointer.x/40 : pointer.x/40;

    scaleRate = 1+scaleRate/20 <0.5 ? 0.5 : 1+scaleRate/20;


    rotationValue = (  pointer.mx)/3;
    trans_X = (-1 * pointer.mx) /15;
    ball_X = pointer.x/12 *3.5

    if(ball_X < -125){
        ball_X = -125;
    }else if(ball_X >125){
        ball_X = 125;
    }
    trans_Z = pointer.mx /4;
  //  trans_Z =  trans_Z < 0 ? (-1 * trans_Z) : trans_Z;
    if(rotationValue >25){
        rotationValue = 25;
    }else if( rotationValue < -25){
        rotationValue = -25
    }

    if(trans_X > 6 ){
        trans_X  = 6;
    }else if(trans_X < -6){
        trans_X = -6;
    }

    if(trans_Z > 50){
        trans_Z  =50;
    }
    else if(trans_Z < 0){
        trans_Z = 0;
    }
    mainContent.style.transform = `translateX(${trans_X}%) rotateY(${rotationValue}deg) translateZ(${trans_Z}px)`;

    if(!ballEvent){
        if(enterFlag == 0){
            ball.style.transform = `scale(${scaleRate}) translateX(${ball_X}px)`
        }else if(enterFlag == 1){
            ball.style.transform = `scale(0.4) translateX(180px)`
        }else if(enterFlag == -1){
            ball.style.transform = `scale(0.4) translateX(-180px)`
        }

    }
    
    
    

    requestAnimationFrame(update);

   // console.log(trans_X , rotationValue , trans_Z);
}


mainContent.style.transition = 'all 0.3s ease-out';


const colorBall = e =>{
    ball.style.backgroundColor = 'white';
    enterFlag = -1;
    message[0].style.transform = 'translateX(15px)'
    underline[0].style.transform = 'translateX(15px)'

}

const uncolorBall = e =>{
    ball.style.backgroundColor = '';
    enterFlag = 0;
    message[0].style.transform = '';
    underline[0].style.transform = ''
}


const colorBall2 = e =>{
    ball.style.backgroundColor = 'white'
    enterFlag = 1;
    message[1].style.transform = 'translateX(-15px)'
    underline[1].style.transform = 'translateX(-15px)'
}

const uncolorBall2 = e =>{
    ball.style.backgroundColor = '';
    enterFlag = 0;
    message[1].style.transform = ''
    underline[1].style.transform = ''
}


const scrollEvent = e =>{

    if(ballEvent == 1){
        return ;
    }
  
    ballEvent = 1;
    tmp = ball.style.transform;

    let target = ball.style.transform.split(' ')[1];
    console.log(target);

    ball.style.transformOrigin = 'center center';
    ball.style.transform += 'scale(4.0)';
    ball.style.backgroundColor = 'white';
    setTimeout( () => {
        ballEvent = 0;
        ball.style.backgroundColor = '';
       

    }, 1500);

}
message[0].addEventListener('mouseenter' , colorBall);
message[1].addEventListener('mouseenter',colorBall2);
message[0].addEventListener('mouseout' , uncolorBall);
message[1].addEventListener('mouseout',uncolorBall2);




window.addEventListener('scroll' , scrollEvent);

eventListeners();


