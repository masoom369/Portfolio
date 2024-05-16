
document.addEventListener("DOMContentLoaded", function () {
    // Get the header
    var header = document.getElementById("myheader");

    // Get the offset position of the header
    var sticky = header.offsetTop;

    // Get the button
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls the page, execute scrollFunction
    window.onscroll = function () {
        // Add sticky class to header if scrolled past its offset
        if (window.scrollY > 350) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

        // Show/hide scroll button based on scroll position
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };
    mybutton.onclick = topFunction;
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});

$(document).ready(function () {


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Learner", "Developer", "Designer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Learner", "Developer", "Designer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
