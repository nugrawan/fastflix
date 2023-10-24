<template>
    <div>
        <CardContainer>
            <CardItems v-for="serie in recentSeries" :key="serie.title" :title="serie.title" :badge="serie.episode"
                :to="`series/${serie._id}`" :image="serie.posterImg" :type="serie.type" :is-movie="false" />
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