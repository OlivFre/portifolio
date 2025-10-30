const swiper = new Swiper('.slide-wrapper', {

loop: true,
grabCursor: true,
spaceBetween: 30,

  // If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
},

//responsive breakpoints
breakpoints: {
    0: {
        slidesPerView: 1
    },
    620: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
}

});