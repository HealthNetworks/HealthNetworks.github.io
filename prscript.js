document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("bioModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // Function to display the modal with the clicked person's information
    function displayBio(event) {
        var person = event.target.closest(".person");
        if (person) {
            var bioText = person.dataset.name;
            document.getElementById("bioContent").innerHTML = "<p>" + bioText + "</p>";
            modal.style.display = "block";
        }
    }

    // Handle click event on the grid container
    var gridContainer = document.getElementById("gridContainer");
    gridContainer.addEventListener('click', displayBio);

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
