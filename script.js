
document.addEventListener("DOMContentLoaded", () => {
    
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove("active");
            if (i === index) {
                img.classList.add("active");
            }
        });
    }

    
    function startCarousel() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 3000); 
    }

    
    startCarousel();
});
