const returnToTopButton = document.querySelector('#return-to-top');
const halfWindowHeight = window.innerHeight/2;

document.addEventListener('scroll', function() {
    if (window.scrollY > halfWindowHeight) {
        returnToTopButton.style.visibility = 'visible';
        returnToTopButton.setAttribute('class', 'slide-in-bottom');
    } else {
        returnToTopButton.style.visibility = 'hidden';
        returnToTopButton.setAttribute('class', 'slide-out-top');
    }
    
})

returnToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})