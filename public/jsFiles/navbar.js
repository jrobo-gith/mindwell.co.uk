let burger = document.querySelector('.hamburger-icon');

burger.addEventListener('click', function() {
    document.querySelector('.hamburger-container').classList.toggle('active');
    document.querySelector('.navbar-mobile').classList.toggle('navbar-active');
    console.log('clicked!');
})

