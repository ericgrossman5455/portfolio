//Shoutout to Dominic Gaiero for the help

document.addEventListener('scroll', setDrawer);

var breakpoint = 50;

function setDrawer() {
   var scrollDown = window.scrollY;
   var navigation = document.getElementById('drawer_bubble');

   if (scrollDown >= breakpoint) {
      navigation.classList.add('drawer_bubble_fadein')
      navigation.classList.remove('drawer_bubble_fadeout')
   }

   else {
      navigation.classList.remove('drawer_bubble_fadein')
      navigation.classList.add('drawer_bubble_fadeout')
   }
}


//Thank you to Ed (YouTube Channel: Dev Ed)

const navSlide = () => {
    const drawer = document.querySelector('.drawer_icon');
    const nav = document.querySelector('nav');
    const shadow = document.querySelector('.nav_shadow');
    const close = document.querySelector('.nav_close_button');
    
    drawer.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        shadow.classList.toggle('nav_shadow_active');
    });
    
    shadow.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        shadow.classList.toggle('nav_shadow_active');
    });
    
    close.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        shadow.classList.toggle('nav_shadow_active');
    });
    
    close.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        shadow.classList.toggle('nav_shadow_active');
     });

}

navSlide();

