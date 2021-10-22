// Hamburger menu: mostrare / nascondere il menu principale


const hamburger = document.querySelector(".fas");
const times = document.querySelector(".close");


// Show hamburger-menu 
hamburger.addEventListener("click",

    function() {
        document.querySelector(".hamburger-menu").classList.add("active")
    }

)



// Hide hamburger-menu 
times.addEventListener("click",

    function() {
        document.querySelector(".hamburger-menu").style.display="none";
    }

)