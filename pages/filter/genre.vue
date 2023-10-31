<template>
    <div class="container mt-2">
        <BreadCrumb :items="[{ text: 'Filters' }, { text: 'Genre' }, { text: $route.query.genre, active: true }]" />
        <section>
            <h3>Movies - {{ $route.query.genre }}</h3>
            <CardContainer>
                <CardItems v-for="movie in genreList" :key="movie.title" class="card" :title="movie.title"
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
            title: 'FastFlix - Streaming Movies By Genre '
        }
    },
    computed: {
        ...mapGetters(['genreList']),
    },
    watch: {
        '$route.query.genre': {
            handler: 'reloadGenre',
            immediate: true
        }
    },
    methods: {
        async reloadGenre() {
            await this.$store.dispatch('getGenreList', this.$route.query.genre)
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