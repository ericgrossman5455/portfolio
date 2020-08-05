const snackbarRemove = () => {
    const dismiss = document.querySelector('.snackbar-button');
    const snackbar = document.querySelector('.snackbar-wrapper')
    
    dismiss.addEventListener('click', () => {
        snackbar.classList.add('snackbar-inactive');

    });
    
}

snackbarRemove();