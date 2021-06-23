


const menu = document.getElementsByClassName('menu')[0];




const menuEvent = e =>{
    const target = menu.getElementsByClassName('menuColoring')[0];
    target.style.transform = 'scale(1)';
}

const leaveEvent = e =>{
    const target = menu.getElementsByClassName('menuColoring')[0];
    target.style.transform = 'scale(0)';
   
}

menu.addEventListener('mouseenter' , menuEvent);
menu.addEventListener('mouseleave' , leaveEvent);