
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
    const intelligenceartificiellecontent = document.querySelector('.intelligence-artificielle-content');
    if (isElementInViewport(intelligenceartificiellecontent)) {
        intelligenceartificiellecontent.style.opacity = '1';
        intelligenceartificiellecontent.style.transform = 'translateY(0)';
    }
}


window.addEventListener('scroll', animateBulles);


animateBulles();




if (rect.top < window.innerHeight && rect.bottom >= 0) {
    intelligenceartificiellecontent.classList.add('reverse');
} else {
    
    intelligenceartificiellecontent.classList.remove('reverse');
}







const intelligenceartificiellecontent = document.querySelector('.intelligence-artificielle-content');


function handleAnimation() {
    
    const rect = intelligenceartificiellecontent.getBoundingClientRect();

   
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        intelligenceartificiellecontent.classList.add('reverse');

      
        setTimeout(() => {
            intelligenceartificiellecontent.classList.remove('reverse');
        }, 2000); 
    }
}


window.addEventListener('resize', handleAnimation);


window.addEventListener('load', handleAnimation);


window.addEventListener('scroll', handleAnimation);

