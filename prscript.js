// prscript.js

// Function to display the bio box next to the clicked image
function displayBio(event) {
    var bioText = event.target.alt;
    
    // Create the bio box element
    var bioBox = document.createElement('div');
    bioBox.className = 'bio-box';
    bioBox.innerHTML = "<p>" + bioText + "</p>";

    // Calculate the position for the bio box
    var rect = event.target.getBoundingClientRect();
    var posX = rect.left + window.scrollX + rect.width + 10; // Adjust position as needed
    var posY = rect.top + window.scrollY;

    // Set the position for the bio box
    bioBox.style.left = posX + 'px';
    bioBox.style.top = posY + 'px';

    // Append the bio box to the body
    document.body.appendChild(bioBox);

    // Add event listener to remove the bio box when clicked outside
    document.addEventListener('click', removeBioBox);
}

// Function to remove the bio box
function removeBioBox(event) {
    var bioBox = document.querySelector('.bio-box');
    if (bioBox && !event.target.closest('.person')) {
        bioBox.parentNode.removeChild(bioBox);
        document.removeEventListener('click', removeBioBox);
    }
}

// Get all images with class "person"
var images = document.querySelectorAll('.person img');

// Loop through each image and add a click event listener
images.forEach(function(image) {
    image.addEventListener('click', displayBio);
});
