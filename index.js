const text = document.getElementById("slidingText-header2");
const messages = [
    "Hurry! limited seats& scholarship availabel ⏰",
    "lucknows top offline MERN Full-stock program 💻",
];

let currentMessageIndex = 0;

function updateMessage() {
    // Update the text with the next message
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    text.textContent = messages[currentMessageIndex];
}

function slideToCenter() {
    // Reset position
    text.style.transform = "translateX(100%)";
    text.classList.remove("visible");

    // After a short delay, move the text to the center
    setTimeout(() => {
        text.style.transform = "translateX(0)";
        text.classList.add("visible");
    }, 100);

    // Change the message after it has paused in the center
    setTimeout(() => {
        updateMessage();
        slideToCenter(); // Repeat the process
    }, 5000); // Adjust delay for how long it stays in the center
}

// Start the sliding animation
slideToCenter();


const innerBox = document.getElementById('innerBox');

// Function to reset sliding
function resetSlides() {
    innerBox.classList.remove('active-1', 'active-2', 'active-3');
}

// Function to slide elements sequentially and loop
function slideInLoop() {
    setTimeout(() => {
        resetSlides(); // Reset before first slide
        innerBox.classList.add('active-1'); // Slide the first text and image
    }, 500); // Delay for the first slide

    setTimeout(() => {
        resetSlides(); // Reset before second slide
        innerBox.classList.add('active-2'); // Slide the second text and image
    }, 15000); // 15-second delay for the second slide

    setTimeout(() => {
        resetSlides(); // Reset before third slide
        innerBox.classList.add('active-3'); // Slide the third text and image
    }, 20000); // 15-second delay for the third slide
}

// Start sliding in a loop
function startLoop() {
    slideInLoop(); // Start the first loop
    setInterval(() => {
        slideInLoop(); // Repeat the loop
    }, 30000); // 15 seconds delay for each slide (45 seconds total for 3 slides)
}

// Initiate the sliding loop
startLoop();


// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the arrow only when scrolled down
window.onscroll = function () {
    const upArrow = document.querySelector('.up-arrow');
    if (document.documentElement.scrollTop > 100) {
        upArrow.style.display = 'block';
    } else {
        upArrow.style.display = 'none';
    }
};


// Function to show the pop-up when the page loads
// Show the form when the page loads
window.onload = function() {
document.getElementById('popupForm').style.display = 'block';
};

// Close the form
function closeForm() {
document.getElementById('popupForm').style.display = 'none';
}


