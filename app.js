document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide"); // Select individual slides
  let currentSlide = 0;

  function showNextSlide() {
    slides.forEach((img) => img.classList.remove("active"));
    // slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length; // loop slides
    slides[currentSlide].classList.add("active"); // Show the current slide
  }
  setInterval(showNextSlide, 3000);
});
