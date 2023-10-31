<template>
    <AllCategory title="All Popular Series" :is-movies="false" :data="popularSeries" />
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async asyncData({ store }) {
        await store.dispatch('getPopularMovies', true)
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Popular Series'
        }
    },
    computed: {
        ...mapGetters(['popularSeries']),
    }
}
</script>