let hour = new Date().getHours();
let intro = document.querySelector(".hero h1");
let headshot = document.querySelector(".hero-headshot");
let signature = document.querySelector(".hero-signature");
let mediaQuery = window.matchMedia('(max-width: 70rem)');


// Set copy for intro and variables for spacing/alignment
if (hour > 22){ //starts at 10PM
    intro.innerHTML = 'hey<br>night&nbsp;owl.';
    var lineBreak = true;
    var ascender = true;
}
else if (hour > 16){ //starts at 5PM
    intro.innerHTML = 'good<br>evening.';
    var lineBreak = true;
    var ascender = false;
}
else if (hour > 13){ //starts at 2PM
    intro.innerHTML = 'good<br>afternoon.';
    intro.style.paddingBottom = '.1rem'
    var lineBreak = true;
    var ascender = false;
}
else if (hour > 10){ //starts at 11AM
    intro.innerHTML = 'hey&nbsp;there.';
    var lineBreak = false;
    var ascender = true;
}
else if (hour > 6){ //starts at 7AM
    intro.innerHTML = 'good<br>mornin\’.';
    intro.style.paddingBottom = '.1rem'
    var lineBreak = true;
    var ascender = false;
}
else if (hour > 3){ //starts at 4AM
    intro.innerHTML = 'hey<br>early&nbsp;bird.';
    var lineBreak = true;
    var ascender = true;
}
else if (hour >= 0){ //starts at 1AM
    intro.innerHTML = 'hey<br>night&nbsp;owl.';
    var lineBreak = true;
    var ascender = true;
}


// Set spacing/alignment for hero
function heroAlignment(e){

    //Wider than 70rem
    if (e.matches == false){
        headshot.style.width = '230px';
        signature.style.right = '-120px';

        if ((lineBreak == true) && (ascender == true)){
            headshot.style.marginTop = '5px';
            headshot.style.height = '335px';
            headshot.style.backgroundPosition = '-50px';
            signature.style.bottom = '-40px';
        }
        else if ((lineBreak == true) && (ascender == false)){
            headshot.style.marginTop = '20px';
            headshot.style.height = '325px';
            headshot.style.backgroundPosition = '-40px';
            signature.style.bottom = '-30px';
        }
        else if ((lineBreak == false) && (ascender == true)){
            headshot.style.marginTop = '5px';
            headshot.style.height = '300px';
            headshot.style.backgroundPosition = '-25px';
            signature.style.bottom = '-25px';
        }
    }

    //Smaller than 70rem
    else if (e.matches == true){
        headshot.style.width = '180px';
        signature.style.right = '-105px';

        if ((lineBreak == true) && (ascender == true)){
            headshot.style.marginTop = '5px';
            headshot.style.height = '290px';
            headshot.style.backgroundPosition = '-55px';
            signature.style.bottom = '-30px';
        }
        else if ((lineBreak == true) && (ascender == false)){
            headshot.style.marginTop = '13px';
            headshot.style.height = '280px';
            headshot.style.backgroundPosition = '-47px';
            signature.style.bottom = '-20px';
        }
        else if ((lineBreak == false) && (ascender == true)){
            headshot.style.marginTop = '5px';
            headshot.style.height = '250px';
            headshot.style.backgroundPosition = '-25px';
            signature.style.bottom = '-25px';
        }
    }
}

mediaQuery.addEventListener("change", heroAlignment);
heroAlignment(mediaQuery);