<template>
    <div class="container search-card mt-2">
        <BreadCrumb :items="[{ text: 'Search', href: '/' }, { text: $route.params.id, active: true }]" />
        <section v-if="searchedMovies.length > 0">
            <h3>{{ searchedMovies.length }} Found {{ $route.params.id }} </h3>
            <b-list-group>
                <b-list-group-item v-for="(movie, i) in searchedMovies" :key="movie._id" variant="light"
                    class="flex-column align-items-start">
                    <a :href="serieDetail.seasons ? '/series/' + movie._id : '/movies/' + movie._id"
                        class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{{ i + 1 }}. {{ movie.title }}</h5>
                    </a>
                    <p v-if="movie.directors && movie.directors.length > 0" class="mb-1">
                        Directed by: {{ movie.directors.join(', ') }}
                    </p>
                    <p v-if="movie.casts && movie.casts.length > 0" class="mb-1">
                        Casts: {{ movie.casts.join(', ') }}
                    </p>
                </b-list-group-item>
            </b-list-group>
        </section>
        <h3 v-else>{{ $route.params.id }} Not Found</h3>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    head() {
        return {
            title: 'FastFlix - Streaming Searhed Movies'
        }
    },
    computed: {
        ...mapGetters(['searchedMovies', 'serieDetail']),
    },
    watch: {
        '$route.params': {
            handler: 'searchingMovies',
            immediate: true
        }
    },
    mounted() {
        this.filterSerie()
    },
    methods: {
        async filterSerie(movie) {
            await this.$store.dispatch('getSerieDetail', movie);
        },
        async searchingMovies() {
            await this.$store.dispatch('searchMovies', this.$route.params.id);
        }
    }

}
</script>
<style scoped>
.card {
    width: 100%;
}

.search-card {
    min-height: 50vh;
}

section {
    margin-bottom: 1.5rem;
}

h3 {
    margin-bottom: 1rem;
}
</style>