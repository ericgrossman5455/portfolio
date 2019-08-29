const snackbarRemove = () => {
    const dismiss = document.querySelector('.snackbar_button');
    const snackbar = document.querySelector('.snackbar_wrapper')
    
    dismiss.addEventListener('click', () => {
        snackbar.classList.add('snackbar_inactive');

    });
    
}

snackbarRemove();