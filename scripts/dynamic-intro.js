var date = new Date();
var hour = date.getHours();
var intro = document.querySelector(".hero-copy h1");

if (hour < 3){ //earlier than 3AM
    intro.innerHTML = 'hey night&nbsp;owl.';
}
else if (hour < 7){ //earlier than 7AM
    intro.innerHTML = 'hey early&nbsp;bird.';
}
else if (hour < 10){ //earlier than 10AM
    intro.innerHTML = 'good mornin\’.';
}
else if (hour < 13){ //earlier than 1PM
    intro.innerHTML = 'hey there.';
}
else if (hour < 18){ //earlier than 6PM
    intro.innerHTML = 'good<br>afternoon.';
}
else if (hour < 22){ //earlier than 10PM
    intro.innerHTML = 'good<br>evening.';
}
else if (hour <= 24){ //earlier or equal to 12AM
    intro.innerHTML = 'hey night&nbsp;owl.';
}