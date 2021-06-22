
const letters = document.getElementsByClassName("letter");
const lastPath = document.getElementsByClassName('last_path')[0];

const logo = document.getElementsByTagName('svg')[0];



const finalOpening = e =>{

    logo.classList.add('logoUp');



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

window.onload = () =>{
    //setTimeout(1000 , startOpening);

    console.dir(lastPath);
    startOpening();
   
    lastPath.addEventListener('animationend' , finalOpening);
}


