const navMenu = document.querySelector(".nav-menu-mobile");
const burgerMenu = document.querySelector(".burger-menu");
console.log(burgerMenu);
const toggleMenu = () => {
    navMenu.classList.toggle("hidden");
};
burgerMenu.addEventListener('click', toggleMenu);

// console.log("hello from scripts");