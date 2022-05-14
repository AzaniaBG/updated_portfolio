
const navMenu = document.querySelector(".ul-nav");
const burgerMenu = document.querySelector(".burger-menu");

const toggleMenu = () => {
    navMenu.classList.toggle("hidden");
};
burgerMenu.addEventListener('click', toggleMenu);






