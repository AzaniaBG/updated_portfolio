
const navMenu = document.querySelector("#nav-menu");
const burgerMenu = document.querySelector(".fas fa-bars")
const toggleMenu = () => {
    const navList = document.querySelector("ul");
    navList.classList.toggle("hidden");
}
navMenu.addEventListener('click', toggleMenu);