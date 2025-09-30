var burger = document.querySelector(".brrgrr");
var page = document.querySelector(".page-container");


if (burger) {
    burger.addEventListener("click", () => {
        var navbar = document.querySelector(".nav-menu");
        if (navbar) {
            toggleNavbar(navbar);
        }
        else {
            console.log("Didn't find navbar!");
        }
    })
}
else {
    console.log("Didn't find burger!")
}

if (page) {
    page.addEventListener("click", () => {
        var navbar = document.querySelector(".nav-menu");
        if (navbar.classList.contains("show")) {
            toggleNavbar(navbar);
        }
    })
}
else {
    console.log("Didn't find page container!")
}


function toggleNavbar(navbar) {
    navbar.classList.toggle("show");
}