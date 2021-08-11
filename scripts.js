
const navMenu = document.querySelector("#nav-menu");
const toggleMenu = () => {
    const navList = document.querySelector("ul");
    navList.classList.toggle("hidden");
}
navMenu.addEventListener('click', toggleMenu);