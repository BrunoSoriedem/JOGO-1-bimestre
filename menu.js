// INICIO NAVBAR
const headerMenu = document.getElementById("header-menu");
const navbarMobile = document.querySelector(".nav-mobile-menu");

if (headerMenu && navbarMobile) {
    headerMenu.addEventListener("click", function () {
        navbarMobile.classList.toggle("active");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth >= 870) {
            navbarMobile.classList.remove("active");
        }
    });
}



// headerMenu.addEventListener("click", function () {
//     setTimeout(function () {
//         navbarMobile.classList.toggle("active");
//     }, 500)
// })

// window.addEventListener("resize", function () {
//     if (window.innerWidth >= 870) {
//         navbarMobile.classList.remove("active");
//     }
// });
// FIM NAVBAR