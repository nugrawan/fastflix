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
            spaceBetween: 3,
            slidesPerGroup: 2,
        },
        320: {
            slidesPerView: 3,
            spaceBetween: 3,
            slidesPerGroup: 2
        },
        480: {
            slidesPerView: 4,
            spaceBetween: 3,
            slidesPerGroup: 3,
        },
        640: {
            slidesPerView: 5,
            spaceBetween: 3,
            slidesPerGroup: 4,
        },
        900: {
            slidesPerView: 7,
            spaceBetween: 5,
            slidesPerGroup: 6,
        },
        1200: {
            slidesPerView: 8,
            spaceBetween: 5,
            slidesPerGroup: 7,
        }
    }
})
