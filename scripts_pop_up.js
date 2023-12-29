// Attendre que la page soit complètement chargée
document.addEventListener("DOMContentLoaded", function () {
    // Récupérer la fenêtre modale
    var modal = document.getElementById("popup");

    // Afficher la fenêtre modale
    modal.style.display = "block";

   
    var closeButton = modal.querySelector(".close");

   
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});


