document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.dot-indicators');
    const projects = document.querySelectorAll('.project');
    
    let currentIndex = 0;
    
    // Create dots
    projects.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    function updateSlider() {
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Arrow navigation
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projects.length;
        updateSlider();
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateSlider();
    });
    
    // Optional: Auto-advance
    setInterval(() => {
        currentIndex = (currentIndex + 1) % projects.length;
        updateSlider();
    }, 5000);
});
