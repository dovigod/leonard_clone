const body = document.getElementById('body');
const letters = document.getElementsByClassName("letter");
const lastPath = document.getElementsByClassName('last_path')[0];
const logo = document.getElementsByTagName('svg')[0];
const nav = document.getElementsByClassName('navigation')[0];
const foote = document.getElementsByClassName('footer')[0];




const loadTitle = () =>{
    const titleContainer = document.getElementsByClassName('title_container')[0];
    titleContainer.style.opacity = 1;
    titleContainer.getElementsByClassName('upper-title')[0].classList.add('titleLoaderUp');
    titleContainer.getElementsByClassName('lower-title')[0].classList.add('titleLoaderLow');
    nav.style.opacity = 1;

}
const finalOpening = e =>{
    logo.classList.add('logoUp');
    const newScript = document.createElement('script');
    newScript.src = './js/background.js';
    newScript.type ='text/javascript';
    newScript.charset ='utf-8';	
    document.getElementById('body').appendChild(newScript);
    setTimeout(loadTitle,1000);
    
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
        } ,200*(i+1))
    }
}


const ballActive = e =>{

    const titles= body.getElementsByClassName('title');

    titles[0].style.opacity =1;
    titles[0].style.top = '15%';

    titles[1].style.opacity = 1;
    titles[1].style.top = '40%';

    titles[0].classList.remove('titleLoaderUp');
    titles[1].classList.remove('titleLoaderLow');

    foote.classList.add('fadeIN');
    const newScript = document.createElement('script');
    newScript.src = './js/mousemovement.js';
    newScript.type ='text/javascript';
    newScript.charset ='utf-8';	
    document.getElementById('body').appendChild(newScript);
    


}
window.onload = () =>{
    //setTimeout(1000 , startOpening);


    setTimeout(tasting , 0);
    setTimeout(startOpening , 2000);
   
    lastPath.addEventListener('animationend' , finalOpening);
    body.getElementsByClassName('lower-title')[0].addEventListener('animationend' , ballActive);   
}

