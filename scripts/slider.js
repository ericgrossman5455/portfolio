const slider = () => {
    const contentOne = document.querySelector('.slider_content_one');
    const contentTwo = document.querySelector('.slider_content_two');
    const contentThree = document.querySelector('.slider_content_three');
    const contentFour = document.querySelector('.slider_content_four');
    
    const leftArrowOne = document.querySelector('.left_arrow_one');
    const rightArrowOne = document.querySelector('.right_arrow_one');
    
    const leftArrowTwo = document.querySelector('.left_arrow_two');
    const rightArrowTwo = document.querySelector('.right_arrow_two');
    
    const leftArrowThree = document.querySelector('.left_arrow_three');
    const rightArrowThree = document.querySelector('.right_arrow_three');
    
    const leftArrowFour = document.querySelector('.left_arrow_four');
    const rightArrowFour = document.querySelector('.right_arrow_four');
    
    
    leftArrowOne.addEventListener('click', () => {
        contentOne.classList.add('slider_content_inactive');
        contentOne.classList.remove('slider_content_active');
        contentFour.classList.add('slider_content_active');
    });
    
    rightArrowOne.addEventListener('click', () => {
        contentOne.classList.remove('slider_content_active');
        contentOne.classList.add('slider_content_inactive');
        contentTwo.classList.add('slider_content_active');
    });
    
    
    leftArrowTwo.addEventListener('click', () => {
        contentTwo.classList.remove('slider_content_active');
        contentOne.classList.add('slider_content_active');
    });
    
    rightArrowTwo.addEventListener('click', () => {
        contentTwo.classList.remove('slider_content_active');
        contentThree.classList.add('slider_content_active');
    });
    
    
    leftArrowThree.addEventListener('click', () => {
        contentThree.classList.remove('slider_content_active');
        contentTwo.classList.add('slider_content_active');
    });
    
    rightArrowThree.addEventListener('click', () => {
        contentThree.classList.remove('slider_content_active');
        contentFour.classList.add('slider_content_active');
    });
    
    
    leftArrowFour.addEventListener('click', () => {
        contentFour.classList.remove('slider_content_active');
        contentThree.classList.add('slider_content_active');
    });
    
    rightArrowFour.addEventListener('click', () => {
        contentFour.classList.remove('slider_content_active');
        contentOne.classList.remove('slider_content_inactive');
    });

}

slider();