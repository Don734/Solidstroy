document.addEventListener('DOMContentLoader', Init());

function Init() {
    navFixed();
    navbarToggle();
}

function navFixed() {
    let navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
            navbar.classList.add('fixed')
        } else {
            navbar.classList.remove('fixed')
        }
    })
}

function navbarToggle() {
    let navbar = document.querySelector('.navbar'),
        navbarBtn = document.querySelector('#navbar-toggle');

    navbarBtn.addEventListener('click', function () {
        navbar.classList.toggle('show');
    })
}