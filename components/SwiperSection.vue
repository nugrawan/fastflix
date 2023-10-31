<template>
    <b-card-group deck class="card-container">
        <div class="swiper">
            <h3 class="swiper-title">{{ title }}</h3>
            <div class="swiper-wrapper">
                <div v-for="item in data" :key="item._id" class="swiper-slide">
                    <div class="slider-content">
                        <CardItems :title="item.title" :badge="isMovie ? item.qualityResolution : item.episode"
                            :to="isMovie ? `movies/${item._id}` : `series/${item._id}?eps=${item.episode}`"
                            :image="item.posterImg" :is-movie="isMovie" />
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </b-card-group>
</template>
<script>
import { Swiper, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
Swiper.use([Navigation, Pagination]);
export default {
    props: {
        data: {
            type: Array,
            default: function () { }
        },
        title: {
            type: String,
            default: ''
        },
        isMovie: {
            type: Boolean,
            default: true
        }
    },

    mounted() {
        // eslint-disable-next-line no-unused-vars
        const swiper = new Swiper('.swiper', {
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
                    spaceBetween: 5,
                    slidesPerGroup: 2
                },
                480: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    slidesPerGroup: 3,
                },
                640: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                    slidesPerGroup: 4,
                },
                900: {
                    slidesPerView: 7,
                    spaceBetween: 10,
                    slidesPerGroup: 6,
                },
                1200: {
                    slidesPerView: 8,
                    spaceBetween: 15,
                    slidesPerGroup: 7,
                }
            }
        })
    }
}
</script>
<style scoped>
.swiper-title {
    font-size: 1.5rem;
    color: white;
    margin: 0 0rem 2rem;
}

.card-header {
    padding: 0px;
}

.card-container {
    width: 90%;
    margin: 0 auto;
}

.swiper {
    padding: .5rem;
    overflow: hidden;
    width: 100%;
    position: relative;
    margin-bottom: 3rem;
}

.swiper-wrapper {
    height: auto;
}

.swiper-button-next,
.swiper-button-prev {
    top: 50%;
    color: red;
    width: 0;
}

.slider-content {
    height: auto;
}

.swiper-slide {
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
}
</style>
