// projects slide bar right and left side

document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".project");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dotContainer = document.getElementById("dotContainer");

    let currentIndex = 0;
    let autoSlideInterval;
    let movingForward = true; // Track direction

    // Create dot indicators
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("w-3", "h-3", "rounded-full", "bg-gray-400", "cursor-pointer", "transition-all");
        dot.addEventListener("click", () => goToSlide(index));
        dotContainer.appendChild(dot);
    });
    updateDots();

    // Function to move to the next slide
    function nextSlide() {
        if (currentIndex >= slides.length - 1) {
            movingForward = false; // Switch to backward
        } else if (currentIndex <= 0) {
            movingForward = true; // Switch to forward
        }

        currentIndex = movingForward ? currentIndex + 1 : currentIndex - 1;
        updateSlider();
    }

    // Function to move to the previous slide
    function prevSlide() {
        movingForward = false;
        currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
        updateSlider();
    }

    // Function to update slider position
    function updateSlider() {
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }

    // Function to update active dot indicator
    function updateDots() {
        const dots = dotContainer.children;
        Array.from(dots).forEach((dot, index) => {
            dot.classList.toggle("bg-gray-900", index === currentIndex);
        });
    }

    // Function to go to a specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    // Auto-slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
    sliderContainer.addEventListener("mouseenter", stopAutoSlide);
    sliderContainer.addEventListener("mouseleave", startAutoSlide);
    
    // Start auto-slide
    startAutoSlide();
});


// scroll bar navigation to go upward
document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show button when user scrolls down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    // Scroll to top when clicked
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

/* Create multiple stars dynamically */

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("stars");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(star);
    }
});

// disable download option
// document.addEventListener("keyup", function (event) {
//     if (event.key === "PrintScreen") {
//         alert("Screenshots are not allowed!");
//         event.preventDefault();
//     }
// });


document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        document.getElementById("secure-image").style.filter = "blur(10px)";
    } else {
        document.getElementById("secure-image").style.filter = "none";
    }
});

// mobile menu toggle
// This function toggles the mobile menu when the button is clicked
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});


document.getElementById('theme-toggle').addEventListener('click', function() {
    // Toggle the 'dark' class on the html element
    document.documentElement.classList.toggle('dark');
    
    // Update the icon
    const icon = document.getElementById('theme-icon');
    if (document.documentElement.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    // Save preference to localStorage
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
});

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
    document.getElementById('theme-icon').classList.remove('fa-moon');
    document.getElementById('theme-icon').classList.add('fa-sun');
}
