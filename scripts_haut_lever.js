
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function animateBulles() {
    const contenuhaut = document.querySelector('.contenu_haut');
    if (isElementInViewport(contenuhaut)) {
        contenuhaut.style.opacity = '1';
        contenuhaut.style.transform = 'translateY(0)';
    }
}


window.addEventListener('scroll', animateBulles);


animateBulles();




if (rect.top < window.innerHeight && rect.bottom >= 0) {
    contenuhaut.classList.add('reverse');
} else {
    
    contenuhaut.classList.remove('reverse');
}







const contenuhaut = document.querySelector('.contenu_haut');


function handleAnimation() {
   
    const rect = contenuhaut.getBoundingClientRect();

   
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        contenuhaut.classList.add('reverse');

       
        setTimeout(() => {
            contenuhaut.classList.remove('reverse');
        }, 2000); 
    }
}


window.addEventListener('resize', handleAnimation);


window.addEventListener('load', handleAnimation);


window.addEventListener('scroll', handleAnimation);

