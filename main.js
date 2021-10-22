const hamburger = document.querySelector(".fas");

hamburger.addEventListener("click",

    function() {
        
        document.querySelector(".hamburger-menu").style.display="block";

    }

)



const times = document.querySelector(".close");

times.addEventListener("click",

    function() {
        document.querySelector(".hamburger-menu").style.display="none";
    }

)