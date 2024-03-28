$(document).ready(function(){
    var currentIndex = 0;
    var slides = $('.slider img');
    var totalSlides = slides.length;

    // Mostrar o primeiro slide
    slides.eq(currentIndex).show();

    // Função para alternar os slides para a direita
    function nextSlide() {
        slides.eq(currentIndex).hide();
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.eq(currentIndex).fadeIn();
    }

    // Função para alternar os slides para a esquerda
    function prevSlide() {
        slides.eq(currentIndex).hide();
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        slides.eq(currentIndex).fadeIn();
    }

    // Alterna os slides quando a seta direita é clicada
    $('.arrow.right').click(function() {
        nextSlide();
    });

    // Alterna os slides quando a seta esquerda é clicada
    $('.arrow.left').click(function() {
        prevSlide();
    });

    // Alterna os slides automaticamente a cada 3 segundos (3000 milissegundos)
    setInterval(nextSlide, 5000);
});