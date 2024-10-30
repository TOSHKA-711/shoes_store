

// items swiper js 
document.addEventListener('DOMContentLoaded', function () {
var swiper = new Swiper('.carousel-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // breakpoints: {
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
  
    //   480: {
    //     slidesPerView: 4,
    //     spaceBetween: 30,
    //   },
  
    //   640: {
    //     slidesPerView: 5,
    //     spaceBetween: 40,
    //   },
    // },
    autoplay:{
      delay: 1500,
    }
});
});
