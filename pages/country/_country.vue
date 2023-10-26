<template>
    <div class="container mt-5">
        <section>
            <h3>{{ countryList[0] }}</h3>
            <CardContainer>
                <CardItems v-for="movie in countryList" :key="movie.title" class="card" :title="movie.title"
                    :badge="movie.qualityResolution" :to="`movies/${movie._id}`" :image="movie.posterImg"
                    :is-movie="true" />
            </CardContainer>
        </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async fetch({ store, params }) {
        await store.dispatch('getCountries', params.country)
        console.log(params);
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Countries' + this.$route.params.country
        }
    },
    computed: {
        ...mapGetters(['countryList'])
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