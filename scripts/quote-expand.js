const expand = () => {
    const kenShort = document.querySelector('.ken-short');
    const kenLong = document.querySelector('.ken-long');
    const kenMin = document.querySelector('.ken-min');
    const kenExpand = document.querySelector('.ken-expand');

    const charShort = document.querySelector('.char-short');
    const charLong = document.querySelector('.char-long');
    const charMin = document.querySelector('.char-min');
    const charExpand = document.querySelector('.char-expand');
    
    kenExpand.addEventListener('click', () => {
        kenShort.classList.add('quote-inactive');
        kenLong.classList.add('quote-active');
    });

    kenMin.addEventListener('click', () => {
        kenShort.classList.remove('quote-inactive');
        kenLong.classList.remove('quote-active');
    });

    charExpand.addEventListener('click', () => {
        charShort.classList.add('quote-inactive');
        charLong.classList.add('quote-active');
    });

    charMin.addEventListener('click', () => {
        charShort.classList.remove('quote-inactive');
        charLong.classList.remove('quote-active');
    });

}

expand();