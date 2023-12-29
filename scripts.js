document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
});

function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// scripts.js

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
    const offresContainer = document.querySelector('.offres-container');
    if (isElementInViewport(offresContainer)) {
        offresContainer.style.opacity = '1';
        offresContainer.style.transform = 'translateY(0)';
    }
}


window.addEventListener('scroll', animateBulles);


animateBulles();




if (rect.top < window.innerHeight && rect.bottom >= 0) {
    offresContainer.classList.add('reverse');
} else {

    offresContainer.classList.remove('reverse');
}







const offresContainer = document.querySelector('.offres-container');


function handleAnimation() {
    
    const rect = offresContainer.getBoundingClientRect();

    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        offresContainer.classList.add('reverse');

       
        setTimeout(() => {
            offresContainer.classList.remove('reverse');
        }, 2000); 
    }
}


window.addEventListener('resize', handleAnimation);


window.addEventListener('load', handleAnimation);


window.addEventListener('scroll', handleAnimation);









// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    
    if (!document.body.classList.contains("loaded")) {
        setTimeout(function () {
            document.body.classList.add("loaded");
        }, 1500); 
    }

    var header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    function toggleMenu() {
        var nav = document.querySelector('nav ul');
        nav.classList.toggle('show');
    }

    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

   
    const offresContainer = document.querySelector('.offres-container');

    
    function handleAnimation() {
        
        const rect = offresContainer.getBoundingClientRect();

        
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            offresContainer.classList.add('reverse');

          
            setTimeout(() => {
                offresContainer.classList.remove('reverse');
            }, 2000); 
        }
    }

   
    window.addEventListener('scroll', handleAnimation);

    
    handleAnimation();

    
    window.addEventListener('resize', handleAnimation);
});














