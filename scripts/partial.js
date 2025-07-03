var burger = document.querySelector(".brrgrr");


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


function toggleNavbar(navbar) {
    navbar.classList.toggle("show");
}