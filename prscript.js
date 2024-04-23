// prscript.js

// Function to display the bio box next to the clicked image
function displayBio(event) {
    var bioText = event.target.alt;
    
    // Create the bio box element
    var bioBox = document.createElement('div');
    bioBox.className = 'bio-box';
    bioBox.innerHTML = "<span class='close'>&times;</span><p>" + bioText + "</p>";

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
    document.addEventListener('click', function(event) {
        if (!bioBox.contains(event.target) && event.target !== event.currentTarget) {
            bioBox.parentNode.removeChild(bioBox);
            document.removeEventListener('click', arguments.callee);
        }
    });

    // Add event listener to close the bio box when clicking on the close button
    var closeButton = bioBox.querySelector('.close');
    closeButton.addEventListener('click', function(event) {
        bioBox.parentNode.removeChild(bioBox);
        event.stopPropagation(); // Prevent the click event from propagating to the document
    });
}

// Get all images with class "person"
var images = document.querySelectorAll('.person img');

// Loop through each image and add a click event listener
images.forEach(function(image) {
    image.addEventListener('click', displayBio);
});
