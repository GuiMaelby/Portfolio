document.addEventListener("DOMContentLoaded", function () {
    const hamburguerMenu = document.querySelector('.hamburguer-menu');
    const navList = document.querySelector('.nav-list');

    hamburguerMenu.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});