// Get all modals and buttons that open modals
const modals = document.querySelectorAll(".modal");
const modalButtons = document.querySelectorAll(".openModal");
const closeButtons = document.querySelectorAll(".close");

// Function to open the modal
modalButtons.forEach((btn, index) => {
    btn.onclick = function() {
        modals[index].style.display = "block";
    }
});

// Function to close the modal
closeButtons.forEach((span, index) => {
    span.onclick = function() {
        modals[index].style.display = "none";
    }
});

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Handle form submission inside a modal (assuming the form is inside the modal)
document.querySelectorAll(".contactForm").forEach(form => {
    form.onsubmit = function(event) {
        event.preventDefault(); // Prevent default form submission

        // Handle form data (e.g., send it to a server)

        alert("Form submitted!"); // For demonstration purposes

        // Close the modal after submission
        form.closest(".modal").style.display = "none";
    }
});

// Toggle navigation visibility between mobile and desktop
function toggleNavigation() {
    const mobileNav = document.getElementById("mobileNav");
    const desktopNav = document.getElementById("desktopNav");

    // Detect screen width to show/hide navigation accordingly
    if (window.innerWidth <= 768) { // Mobile view
        mobileNav.style.display = "block";
        desktopNav.style.display = "none";
    } else { // Desktop view
        mobileNav.style.display = "none";
        desktopNav.style.display = "block";
    }
}

// Add event listener to handle window resizing
window.onresize = toggleNavigation;

// Call the function on page load to ensure correct initial state
window.onload = toggleNavigation;
