const navSlide = () => {
    const drawer = document.querySelector('.drawer');
    const nav = document.querySelector('nav');
    
    drawer.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();

//const navSlide = () => {
//    const drawer = document.querySelector('.drawer');
//    const nav = document.querySelector('nav');
//    const shadow = document.querySelector('.nav_shadow');
//    
//    drawer.addEventListener('click',()=>{
//        nav.classList.toggle('nav_active');
//    });
//    
//    drawer.addEventListener('click',()=>{
//        .nav_shadow.classList.toggle('.nav_shadow_active');
//    });
//}
//
//navSlide();