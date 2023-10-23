import { Swiper, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';


Swiper.use([Navigation, Pagination]);

export const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    modules: [Navigation, Pagination],

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 3
        },
        320: {
            slidesPerView: 3,
            spaceBetween: 3
        },
        480: {
            slidesPerView: 4,
            spaceBetween: 3
        },
        640: {
            slidesPerView: 5,
            spaceBetween: 3
        },
        900: {
            slidesPerView: 7,
            spaceBetween: 5
        },
        1200: {
            slidesPerView: 8,
            spaceBetween: 5
        }
    }
})
