// Variáveis do menu responsivo
const hamburger = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");
const menuMobileOptions = document.querySelectorAll(".mobile-options");
let menuAtivo = false;

hamburger.addEventListener('click', () => {
    if (menuAtivo) { // Desativando menu
        desativandoMenu();
        return menuAtivo;
    }
    // Ativdando menu
    hamburger.classList.add("active");
    menu.classList.add("active");
    menuMobileOptions.forEach((el) => {
        el.classList.add("animation-links-menu");
    });
    menuAtivo = true;
});

function desativandoMenu() {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    menuMobileOptions.forEach((el) => {
        el.classList.remove("animation-links-menu");
    });
    menuAtivo = false;
}

// Fechando menu quando opção for clicada
menuMobileOptions.forEach((link) => {
    link.addEventListener('click', () => {
        desativandoMenu();
    })
})