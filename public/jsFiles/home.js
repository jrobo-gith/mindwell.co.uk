let navMobile = document.querySelector('.navbar-mobile');

window.addEventListener('scroll', function() {
    if (scrollY !== 0) {
        navMobile.classList.add('navbar-mobile-active');
        burger.classList.add('navbar-mobile-active');
    }

    else {
        navMobile.classList.remove('navbar-mobile-active');
        burger.classList.remove('navbar-mobile-active');
    }
})