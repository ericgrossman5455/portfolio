//Thank you to Ed at YouTube Channel: Dev Ed

const navSlide = () => {
    const drawer = document.querySelector('.drawer');
    const nav = document.querySelector('nav');
    const shadow = document.querySelector('.nav_shadow');
    const back = document.querySelector('.nav_back_arrow');
    
    drawer.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        shadow.classList.toggle('nav_shadow_active');
    });
    
    shadow.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        shadow.classList.toggle('nav_shadow_active');
    });
    
    back.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        shadow.classList.toggle('nav_shadow_active');
    });

}

navSlide();