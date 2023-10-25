<template>
    <div class="container mt-5">
        <section>
            <h3>Recent Upload</h3>
            <CardContainer title="Recent upload">
                <CardItems v-for="serie in recentSeries" :key="serie.title" class="card" :title="serie.title"
                    :badge="serie.episode" :to="`series/${serie._id}`" :image="serie.posterImg" :type="serie.type"
                    :is-movie="false" />
            </CardContainer>
        </section>
        <section>
            <h3>Top Rated</h3>
            <CardContainer title="Top reted">
                <CardItems v-for="serie in topRatedSeries" :key="serie.title" class="card" :title="serie.title"
                    :badge="serie.episode" :to="`series/${serie._id}`" :image="serie.posterImg" :type="serie.type"
                    :is-movie="false" />
            </CardContainer>
        </section>
        <section>
            <h3>Popular</h3>
            <CardContainer title="Popular">
                <CardItems v-for="serie in popularSeries" :key="serie.title" class="card" :title="serie.title"
                    :badge="serie.episode" :to="`series/${serie._id}`" :image="serie.posterImg" :type="serie.type"
                    :is-movie="false" />
            </CardContainer>
        </section>

    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async fetch({ store }) {
        await Promise.all([
            store.dispatch('getRecentMovies', true),
            store.dispatch('getPopularMovies', true),
            store.dispatch('getTopRatedMovies', true),
        ]);
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Series'
        }
    },
    computed: {
        ...mapGetters(['recentSeries', 'popularSeries', 'topRatedSeries']),
    }
}
</script>
<style scoped>
.card {
    width: 100%;
}

section {
    margin-bottom: 1.5rem;
}

h3 {
    margin-bottom: 1rem;
}

.badge {
    left: 1px;
}
</style>