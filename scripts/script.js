// my method
const button = document.querySelector(".menu-btn");

function toggleMenu() {

    const mainMenu = document.querySelector(".main-menu");

    // add/remove "show" class in .main-menu element classes list
    mainMenu.classList.toggle("show");
}

button.addEventListener("click", toggleMenu);

// video's method
// document.querySelector(".menu-btn").addEventListener("click", () => {
//     document.querySelector(".main-menu").classList.toggle("show");
// });