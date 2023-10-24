<template>
    <b-card-group deck class="card-container">
        <div class="swiper">
            <h3 class="swiper-title">{{ title }}</h3>
            <div class="swiper-wrapper">
                <div v-for="item in data" :key="item._id" class="swiper-slide">
                    <div class="slider-content">
                        <CardItems :title="item.title" :badge="isMovie ? item.qualityResolution : item.episode"
                            :to="isMovie ? `movies/${item._id}` : `series/${item._id}`" :image="item.posterImg"
                            :type="item.type" :is-movie="isMovie" />
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </b-card-group>
</template>
<script>
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
}
</script>
<style scoped>
.swiper-title {
    font-size: 1.5rem;
    color: azure;
    margin: 0 1rem 1rem;
}

.card-header {
    padding: 0px;
}

.card-container {
    width: 90%;
    margin: auto;
}

.swiper {
    padding: .5rem;
    overflow: hidden;
    width: 100%;
    position: relative;
}

.swiper-wrapper {
    height: auto;
}

.swiper-button-next,
.swiper-button-prev {
    top: 40%;
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
