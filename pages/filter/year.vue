<template>
    <div class="container mt-2">
        <BreadCrumb :items="[{ text: 'Filters' }, { text: 'Years' }, { text: $route.query.year, active: true }]" />
        <section>
            <h3>Movies - {{ $route.query.year }}</h3>
            <CardContainer>
                <CardItems v-for="movie in yearList" :key="movie.title" class="card" :title="movie.title"
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
            title: 'FastFlix - Streaming Movies ' + this.$route.query.year
        }
    },
    computed: {
        ...mapGetters(['yearList']),
    },
    watch: {
        '$route.query.year': {
            handler: 'reloadYears',
            immediate: true
        }
    },
    methods: {
        async reloadYears() {
            await this.$store.dispatch('getYearList', this.$route.query.year)
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