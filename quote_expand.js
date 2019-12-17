const expand = () => {
    const kenShort = document.querySelector('.ken_short');
    const kenLong = document.querySelector('.ken_long');
    const kenMin = document.querySelector('.ken_min');
    const kenExpand = document.querySelector('.ken_expand');

    const charShort = document.querySelector('.char_short');
    const charLong = document.querySelector('.char_long');
    const charMin = document.querySelector('.char_min');
    const charExpand = document.querySelector('.char_expand');

    const inactive = document.querySelector('.quote_inactive');
    const active = document.querySelector('.quote_active');
    
    kenExpand.addEventListener('click', () => {
        kenShort.classList.add('quote_inactive');
        kenLong.classList.add('quote_active');
    });

    kenMin.addEventListener('click', () => {
        kenShort.classList.remove('quote_inactive');
        kenLong.classList.remove('quote_active');
    });

    charExpand.addEventListener('click', () => {
        charShort.classList.add('quote_inactive');
        charLong.classList.add('quote_active');
    });

    charMin.addEventListener('click', () => {
        charShort.classList.remove('quote_inactive');
        charLong.classList.remove('quote_active');
    });

}

expand();