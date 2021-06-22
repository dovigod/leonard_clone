const body = document.getElementById('body');
const letters = document.getElementsByClassName("letter");
const lastPath = document.getElementsByClassName('last_path')[0];
const logo = document.getElementsByTagName('svg')[0];




const finalOpening = e =>{
    logo.classList.add('logoUp');
    const newScript = document.createElement('script');
    newScript.src = './js/background.js';
    newScript.type ='text/javascript';
    newScript.charset ='utf-8';	
    
    document.getElementById('body').appendChild(newScript);
    
}

const turnLogo = e =>{
    const paths = e.target.getElementsByClassName('logo_dependent');

    for(let i = 0 ; i < paths.length ; i++){
        paths[i].classList.add('turnOn');
       // paths[i].style.opacity = 1;
        //finalOpening(1);
    }
}

const startOpening = () =>{
    for(let i = 0 ; i < letters.length ; i++){
        letters[i].addEventListener('animationend' , turnLogo);
        letters[i].classList.add('no_trans')
    }
}

const tasting = () =>{

    const ind = document.getElementsByClassName('logo_independent');

    for(let i = 0 ; i < ind.length ; i++){
        setTimeout( () => {
            ind[i].style.opacity = 1;
        } ,400*(i+1))
    }
}

window.onload = () =>{
    //setTimeout(1000 , startOpening);


    setTimeout(tasting , 0);
    setTimeout(startOpening , 2000);
   
    lastPath.addEventListener('animationend' , finalOpening);
    
}

