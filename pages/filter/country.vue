<template>
    <div class="container mt-2">
        <BreadCrumb :items="[{ text: 'Filters' }, { text: 'Country' }, { text: $route.query.country, active: true }]" />
        <section>
            <h3>Movies - {{ $route.query.country }}</h3>
            <CardContainer :total="countryList.length">
                <CardItems v-for="movie in countryList" :key="movie.title" class="card" :title="movie.title"
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
            title: 'FastFlix - Streaming Movies By Country '
        }
    },
    computed: {
        ...mapGetters(['countryList']),
    },
    watch: {
        '$route.query.country': {
            handler: 'reloadCountry',
            immediate: true
        }
    },
    methods: {
        async reloadCountry() {
            const newCountry = this.$route.query.country;
            await this.$store.dispatch('getCountryList', newCountry)
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