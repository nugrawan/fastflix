<template>
    <div class="container mt-5">
        <section>
            <h3>Recent Upload</h3>
            <CardContainer>
                <CardItems v-for="movie in recentMovies" :key="movie.title" class="card" :title="movie.title"
                    :badge="movie.qualityResolution" :to="`movies/${movie._id}`" :image="movie.posterImg"
                    :is-movie="true" />
            </CardContainer>
        </section>
        <section>
            <h3>Top Rated</h3>
            <CardContainer>
                <CardItems v-for="movie in topRatedMovies" :key="movie.title" class="card" :title="movie.title"
                    :badge="movie.qualityResolution" :to="`movies/${movie._id}`" :image="movie.posterImg"
                    :is-movie="true" />
            </CardContainer>
        </section>
        <section>
            <h3>Popular</h3>
            <CardContainer>
                <CardItems v-for="movie in popularMovies" :key="movie.title" class="card" :title="movie.title"
                    :badge="movie.qualityResolution" :to="`movies/${movie._id}`" :image="movie.posterImg"
                    :is-movie="true" />
            </CardContainer>
        </section>

    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async fetch({ store }) {
        await Promise.all([
            store.dispatch('getRecentMovies'),
            store.dispatch('getPopularMovies'),
            store.dispatch('getTopRatedMovies'),
        ]);
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Movies'
        }
    },
    computed: {
        ...mapGetters(['recentMovies', 'popularMovies', 'topRatedMovies']),
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
</style>