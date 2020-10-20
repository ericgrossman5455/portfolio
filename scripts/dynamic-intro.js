var date = new Date();
var hour = date.getHours();
var h1 = document.querySelector(".hero-content h1");
var headshot = document.querySelector(".hero-headshot");
var signature = document.querySelector(".signature");

if (hour < 3){ //earlier than 3AM
    h1.innerHTML = 'hey night&nbsp;owl.';
    headshot.style.height = '350px';
    headshot.style.backgroundPosition = '-55px';
    signature.style.bottom = '-40px';
}
else if (hour < 7){ //earlier than 7AM
    h1.innerHTML = 'hey early&nbsp;bird.';
    headshot.style.height = '350px';
    headshot.style.backgroundPosition = '-55px';
    signature.style.bottom = '-40px';
}
else if (hour < 10){ //earlier than 10AM
    h1.innerHTML = 'good mornin\’.';
}
else if (hour < 13){ //earlier than 1PM
    h1.innerHTML = 'hey there.';
}
else if (hour < 18){ //earlier than 6PM
    h1.innerHTML = 'good<br>afternoon.';
    headshot.style.height = '350px';
    headshot.style.backgroundPosition = '-55px';
    signature.style.bottom = '-40px';
}
else if (hour < 22){ //earlier than 10PM
    h1.innerHTML = 'good<br>evening.';
    headshot.style.height = '350px';
    headshot.style.backgroundPosition = '-55px';
    signature.style.bottom = '-40px';
}
else if (hour <= 24){ //earlier or equal to 12AM
    h1.innerHTML = 'hey night&nbsp;owl.';
    headshot.style.height = '350px';
    headshot.style.backgroundPosition = '-55px';
    signature.style.bottom = '-40px';
}