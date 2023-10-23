<template>
    <div class="swiper">
        <div class="swiper-wrapper">
            <div v-for="i in recentMovies" :key="i._id" class="swiper-slide" :class="`slide--${i}`">
                <div class="slider-content">{{ i.title }}</div>
            </div>
        </div>
        <!-- If pagination is needed -->
        <div class="swiper-pagination"></div>

        <!-- If navigation buttons are needed -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
    <!-- <div class="swiper">

        <div class="swiper-wrapper">
            <div v-for="movie in recentMovies" :key="movie._id" class="swiper-slide">
                <div class="slider-content">
                    <h1>{{ movie.title }}</h1>
                    <p>{{ movie._id }}</p>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev">P</div>
        <div class="swiper-button-next">N</div>
    </div> -->
</template>  
<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['recentMovies']),
    },
    mounted() {
        this.getRecentMovies()
        // eslint-disable-next-line no-unused-vars
        // const swiper = this.$swiper
    },
    methods: {
        ...mapActions(['getRecentMovies']),
    },
};
</script>
  
<style scoped>
.swiper {
    height: 500px;
    overflow: hidden;
    position: relative;
    width: 100%;
}

.swiper-slide {
    align-items: center;
    display: flex;
    justify-content: center;
}

/* Tambahkan gaya sesuai kebutuhan Anda */
.slider-content {
    text-align: center;
    background-color: #3498db;
    color: #ffffff;
    padding: 20px;
}
</style>
