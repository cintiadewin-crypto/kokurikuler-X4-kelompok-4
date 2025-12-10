// JavaScript untuk Efek Navigasi Sticky
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    function stickyNav() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky-active');
        } else {
            header.classList.remove('sticky-active');
        }
    }

    // Tambahkan class 'sticky-active' pada CSS untuk styling header sticky
    window.onscroll = stickyNav;

    // Smooth Scroll untuk Navigasi
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});