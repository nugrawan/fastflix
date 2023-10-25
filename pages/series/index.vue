<template>
    <div class="container">
        <CardContainer class="grid-container">
            <CardItems class="card" v-for="serie in recentSeries" :key="serie.title" :title="serie.title"
                :badge="serie.episode" :to="`series/${serie._id}`" :image="serie.posterImg" :type="serie.type"
                :is-movie="false" />
        </CardContainer>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async fetch({ store }) {
        await store.dispatch('getRecentMovies', true)
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Series'
        }
    },
    computed: {
        ...mapGetters(['recentSeries']),
    }
}
</script>
<style>
.card {
    width: 100%;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
}

@media screen and (max-width : 960px) {
    .grid-container {
        grid-template-columns: repeat(6, 1fr);
    }
}

@media screen and (max-width : 580px) {
    .grid-container {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>