// Simulate a delay to demonstrate loading indicator
setTimeout(function() {
    document.querySelector('.loading-overlay').style.display = 'none';
  }, 3000); // Hide the loading indicator after 3 seconds (adjust as needed)

// Show the scroll-to-top button when user scrolls down
window.addEventListener("scroll", showScrollButton);

function showScrollButton() {
  const scrollButton = document.getElementById("scrollButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// Scroll to the top when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Enable smooth scrolling
  });
}

document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const acceptBtn = document.getElementById("acceptBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    function showOverlay() {
        overlay.style.display = "block";
    }

    function hideOverlay() {
        overlay.style.display = "none";
    }

    acceptBtn.addEventListener("click", function() {
        hideOverlay();
        // Add your 'Accept' action here
    });

    cancelBtn.addEventListener("click", function() {
        hideOverlay();
        // Add your 'Cancel' action here
    });

    setInterval(showOverlay, 80000); // Show overlay every 3 seconds
});
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

