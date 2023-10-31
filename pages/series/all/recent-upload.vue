<template>
    <AllCategory title="All Recent Uploaded Series" :is-movies="false" :data="recentSeries" />
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async asyncData({ store }) {
        await store.dispatch('getRecentMovies', true)
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Recent Uploaded Series'
        }
    },
    computed: {
        ...mapGetters(['recentSeries']),
    }
}
</script>