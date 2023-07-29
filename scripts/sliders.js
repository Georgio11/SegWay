let swiperWrapper1 = document.querySelector(".segway-choice_wrapper");
let swiperWrapper2 = document.querySelector(".accessories_wrapper");

function swiperToggle() {
    if (window.innerWidth <= 1000) {
        swiperWrapper1.classList.add("swiper-wrapper");
        swiperWrapper2.classList.add("swiper-wrapper");
    } else {
        swiperWrapper1.classList.remove("swiper-wrapper");
        swiperWrapper2.classList.remove("swiper-wrapper");
    }
};

swiperToggle();

function checkForWindowResize() {
    swiperToggle();
    
    new Swiper('.segway-choice_container',{
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    
        breakpoints: {
            900: {
                slidesPerView: 7,
            },
            800: {
                slidesPerView: 5,
            },
            450: {
                slidesPerView: 4,
            },
            0: {
                slidesPerView: 3,
            },
        },
    
        grabCursor: true,
        slidesPerView: 7,
        spaceBetween: 0,
    });

    new Swiper('.accessories_container .swiper-container',{
        breakpoints: {
            780: {
                slidesPerView: 3.3,
            },
            650: {
                slidesPerView: 2.3,
            },
            450: {
                slidesPerView: 1.8,
            },
            0: {
                slidesPerView: 1.2,
            },
        },
    
        grabCursor: true,
        slidesPerView: 3,
        spaceBetween: 20,
    });
};

window.addEventListener('resize', checkForWindowResize);

new Swiper('.segway-choice_container',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        900: {
            slidesPerView: 7,
        },
        800: {
            slidesPerView: 5,
        },
        450: {
            slidesPerView: 4,
        },
        0: {
            slidesPerView: 3,
        },
    },

    grabCursor: true,
    slidesPerView: 7,
    spaceBetween: 0,
});

new Swiper('.intro-swiper_container',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
    },
});

new Swiper('.accessories_container .swiper-container',{
    breakpoints: {
        780: {
            slidesPerView: 3.3,
        },
        650: {
            slidesPerView: 2.3,
        },
        450: {
            slidesPerView: 1.8,
        },
        0: {
            slidesPerView: 1.2,
        },
    },

    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 0,
});