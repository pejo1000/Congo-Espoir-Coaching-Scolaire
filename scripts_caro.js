const offreBulles = document.querySelectorAll('.offre-bulle');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let activeIndex = 0;

function updateActiveBulle() {
    offreBulles.forEach((bulle, index) => {
        if (index === activeIndex) {
            bulle.classList.add('active');
        } else {
            bulle.classList.remove('active');
        }
    });
}

function showDefaultBulle() {
   
    activeIndex = 0;
    updateActiveBulle();
}


prevButton.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + offreBulles.length) % offreBulles.length;
    updateActiveBulle();
});


nextButton.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % offreBulles.length;
    updateActiveBulle();
});


showDefaultBulle();











