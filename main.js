// Hamburger menu: mostrare / nascondere il menu principale


const hamburger = document.querySelector(".fas");
const times = document.querySelector(".close");
const menu = document.querySelector(".hamburger-menu");

// Show hamburger-menu 
hamburger.addEventListener("click",

    function() {
        menu.classList.add("active");
    }

)



// Hide hamburger-menu 
times.addEventListener("click",

    function() {
        menu.classList.remove("active");
    }

)