// prscript.js

document.addEventListener('DOMContentLoaded', function() {
    // Get all bio buttons
    var bioButtons = document.querySelectorAll('.bio-button');

    // Get the bio modal
    var modal = document.getElementById("bioModal");

    // Get the <span> element that closes the modal
    var closeButton = document.querySelector(".modal .close");

    // Add event listeners to all bio buttons
    bioButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Get the position of the clicked button
            var buttonRect = button.getBoundingClientRect();

            // Set modal position next to the clicked button
            modal.style.left = buttonRect.right + 'px';
            modal.style.top = buttonRect.top + 'px';

            // Display the modal
            modal.style.display = "block";
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Close the modal when clicking anywhere outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
