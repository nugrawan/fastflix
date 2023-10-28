<template>
    <div class="container mt-5">
        <section>
            <h3>Movies - {{ $route.params.id }}</h3>
            <CardContainer>
                <CardItems v-for="movie in searchedMovies" :key="movie.title" class="card" :title="movie.title"
                    :badge="movie.qualityResolution" :to="`/movies/${movie._id}`" :image="movie.posterImg"
                    :is-movie="true" />
            </CardContainer>
        </section>
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
        ...mapGetters(['searchedMovies']),
    },
    watch: {
        '$route.params.id': {
            handler: 'reloadSearched',
            immediate: true
        }
    },
    methods: {
        async reloadSearched() {
            await this.$store.dispatch('searchMovies', this.$route.params.id)
            return {}
        }
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