//Thank you to Ed at YouTube Channel: Dev Ed

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

}

navSlide();