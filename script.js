document.addEventListener("DOMContentLoaded", function () {
    const hamburguerMenu = document.querySelector('.hamburguer-menu');
    const navList = document.querySelector('.nav-list');

    hamburguerMenu.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});

let slideIndex = 1;
mostrarFoto(slideIndex);

function mudarFoto(n) {
    mostrarFoto(slideIndex += n);
}

function mostrarFoto(n) {
    let slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}