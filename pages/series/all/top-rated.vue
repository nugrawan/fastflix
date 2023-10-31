<template>
    <AllCategory title="All Top Rated Series" :is-movies="false" :data="topRatedSeries" />
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async asyncData({ store }) {
        await store.dispatch('getTopRatedMovies', true)
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Top Rated Series'
        }
    },
    computed: {
        ...mapGetters(['topRatedSeries']),
    }
}
</script>