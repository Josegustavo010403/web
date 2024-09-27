// JavaScript para la transición automática
let currentSlide = 0;
const slides = document.querySelectorAll('.carrusel'); // Obtiene todos los elementos del carrusel
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Quita la clase active de todos
        if (i === index) {
            slide.classList.add('active'); // Solo añade la clase active al slide actual
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Va al siguiente slide en un ciclo
    showSlide(currentSlide);
}

// Cambia de imagen cada 3 segundos
setInterval(nextSlide, 3000);
