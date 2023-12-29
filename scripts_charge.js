document.addEventListener("DOMContentLoaded", function () {
    
    const target = document.querySelector(".loader-container");
    const spinner = new Spinner().spin(target);
  
    
    setTimeout(function () {
      const loaderContainer = document.querySelector(".loader-container");
      loaderContainer.style.display = "none";
    }, 2500); 
  });

  

  