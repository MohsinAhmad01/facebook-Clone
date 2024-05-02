let cardWrap=document.getElementById("cardWrap");

function openCard(){
    cardWrap.classList.toggle('open-menu');  
}
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the main-left and toggle button
    var mainLeft = document.querySelector('.main-left');
    var toggleButton = document.getElementById('toggleSidebar');

    // Remove the 'show' class to hide the main-left initially
    mainLeft.classList.remove('show');

    // Add click event listener to the toggle button
    toggleButton.addEventListener('click', function() {
        // Toggle the 'show' class on the main-left to control visibility
        mainLeft.classList.toggle('show');
    });
});


function hideImagesOnSmallScreens() {
    var messNotElements = document.getElementsByClassName("mess-not");
    for (var i = 0; i < messNotElements.length; i++) {
        messNotElements[i].style.display = "none";
    }
}


