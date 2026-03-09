console.log("Javascript ligado com sucesso");

const textarea = document.querySelector("#message");

textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

const elements = document.querySelectorAll(".reveal");
elements.forEach(el => observer.observe(el));


const track = document.querySelector(".services-container");
const slides = document.querySelectorAll(".sub-container");
const leftArrow = document.querySelector(".services-arrow.left");
const rightArrow = document.querySelector(".services-arrow.right");

let currentSlide = 0;

function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");
}

rightArrow.addEventListener("click", function () {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider();
});

leftArrow.addEventListener("click", function () {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1;
    }
    updateSlider();
});

updateSlider();
