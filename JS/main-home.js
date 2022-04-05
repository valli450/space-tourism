/* Home page script */
/* Mobbile Menu */
const menuBlock = document.querySelector(".header__menu");

function openMenu() {
    menuBlock.classList.add("showMenu");
    document.querySelector(".header__humburger").style.display = 'none';

}

function closeMenu() {
    menuBlock.classList.remove("showMenu");
    document.querySelector(".header__humburger").style.display = 'block';

}
