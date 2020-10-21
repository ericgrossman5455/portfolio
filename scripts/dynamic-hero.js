var date = new Date();
var hour = date.getHours();
var h1 = document.querySelector(".hero-content h1");
var headshot = document.querySelector(".hero-headshot");
var signature = document.querySelector(".signature");
var oneLine = false;

if (hour > 22){ //after 10PM
    h1.innerHTML = 'hey<br>night&nbsp;owl.';
    headshot.style.height = '335px';
    headshot.style.margin = '4px 30px 0 0';
    headshot.style.backgroundPosition = '-40px';
    signature.style.right = '-115px';
    signature.style.bottom = '-50px';
}

else if (hour > 18){ //after 6PM
    h1.innerHTML = 'good<br>evening.';
    headshot.style.height = '335px';
    headshot.style.margin = '20px 30px 0 0';
    headshot.style.backgroundPosition = '-40px';
    signature.style.right = '-120px';
    signature.style.bottom = '-45px';
}

else if (hour > 13){ //after 1PM
    h1.innerHTML = 'good<br>afternoon.';
    headshot.style.height = '335px';
    headshot.style.margin = '20px 30px 0 0';
    headshot.style.backgroundPosition = '-40px';
    signature.style.right = '-120px';
    signature.style.bottom = '-45px';
}

else if (hour > 10){ //after 10AM
    h1.innerHTML = 'hey there.';
    var oneLine = true;
}

else if (hour > 6){ //after 6AM
    h1.innerHTML = 'good<br>mornin\’.';
    headshot.style.height = '335px';
    headshot.style.margin = '20px 30px 0 0';
    headshot.style.backgroundPosition = '-40px';
    signature.style.right = '-120px';
    signature.style.bottom = '-45px';
}

else if (hour > 3){ //after 3AM
    h1.innerHTML = 'hey<br>early&nbsp;bird.';
    headshot.style.height = '335px';
    headshot.style.margin = '4px 30px 0 0';
    headshot.style.backgroundPosition = '-40px';
    signature.style.right = '-115px';
    signature.style.bottom = '-50px';
}

else if (hour >= 0){ //after 12AM
    h1.innerHTML = 'hey<br>night&nbsp;owl.';
    headshot.style.height = '335px';
    headshot.style.margin = '4px 30px 0 0';
    headshot.style.backgroundPosition = '-40px';
    signature.style.right = '-115px';
    signature.style.bottom = '-50px';
}

const mediaQuery = window.matchMedia('(max-width: 70em)')

function oneLineIntro(e) {

    if ((e.matches == true) && (oneLine == true)) {
        // console.log("smaller than 70em and one line");
        headshot.style.backgroundPosition = '-10px';
        headshot.style.height = '260px';
        headshot.style.width = '200px';
    }

    else if ((e.matches == false) && (oneLine == true)){
        // console.log("greater than 70em and one line");
        headshot.style.backgroundPosition = '-20px';
        headshot.style.height = '310px';
        headshot.style.width = '230px';
    }

    else if ((e.matches == false) && (oneLine == false)){
        // console.log("greater than 70em and two lines");
        headshot.style.backgroundPosition = '-40px';
        headshot.style.height = '335px';
        headshot.style.width = '230px';
    }

    else if ((e.matches == true) && (oneLine == false)){
        // console.log("smaller than 70em and two lines");
        headshot.style.backgroundPosition = '-35px';
        headshot.style.height = '290px';
        headshot.style.width = '200px';
    }
}

mediaQuery.addListener(oneLineIntro)
oneLineIntro(mediaQuery)