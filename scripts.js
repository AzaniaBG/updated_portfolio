
// import * as ProjectsData from './node_modules/module.js';

const navMenu = document.querySelector(".nav-menu-mobile");
const burgerMenu = document.querySelector(".burger-menu");
console.log(burgerMenu);
const toggleMenu = () => {
    navMenu.classList.toggle("hidden");
};
burgerMenu.addEventListener('click', toggleMenu);

// const ProjectsData = require('./node_modules/module');
// console.log(ProjectsData.projects);




