/*
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
    const bulledebut = document.querySelector('.bulle_debut');
    if (isElementInViewport(bulledebut)) {
        bulledebut.style.opacity = '1';
        bulledebut.style.transform = 'translateY(0)';
    }
}


window.addEventListener('scroll', animateBulles);


animateBulles();




if (rect.top < window.innerHeight && rect.bottom >= 0) {
    bulledebut.classList.add('reverse');
} else {
   
    bulledebut.classList.remove('reverse');
}







const obulledebut = document.querySelector('.bulle_debut');


function handleAnimation() {
   
    const rect = bulledebut.getBoundingClientRect();

    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        bulledebut.classList.add('reverse');

        
        setTimeout(() => {
            bulledebut.classList.remove('reverse');
        }, 2000); 
    }
}


window.addEventListener('resize', handleAnimation);


window.addEventListener('load', handleAnimation);


window.addEventListener('scroll', handleAnimation);

*/