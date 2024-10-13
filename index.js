var sidnav = document.querySelector(".side-navbar")

function showsidenav(){
    sidnav.style.left="0"
}

function hidesidenav(){
    sidnav.style.left="-45%"
}

window.addEventListener("scroll", function() {
    var navbar = document.querySelector('.navbar');
    var chooseSection = document.querySelector('.impression');
    var chooseSectionPosition = chooseSection.getBoundingClientRect().top;

    // Check if .choose-section is in the viewport
    if (chooseSectionPosition <= 0) {
        navbar.classList.add('white-bg'); // Change background to white
    } else {
        navbar.classList.remove('white-bg'); // Restore original background
    }
});