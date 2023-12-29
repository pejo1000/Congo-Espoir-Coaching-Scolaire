document.addEventListener("DOMContentLoaded", function() {
    const prevArrow = document.getElementById("prev-arrow");
    const nextArrow = document.getElementById("next-arrow");
    const bubbleContainer = document.getElementById("bulle-debut");
    const bubbleElements = document.querySelectorAll(".bulle_debut > div");
    let currentBubble = 0;

    function showBubble(index) {
        bubbleElements.forEach((el, i) => {
            el.style.display = i === index ? "block" : "none";
        });
    }

    prevArrow.addEventListener("click", function() {
        currentBubble = (currentBubble - 1 + bubbleElements.length) % bubbleElements.length;
        showBubble(currentBubble);
    });

    nextArrow.addEventListener("click", function() {
        currentBubble = (currentBubble + 1) % bubbleElements.length;
        showBubble(currentBubble);
    });

    showBubble(currentBubble);

   
});
