<template>
    <AllCategory title="All Top Rated Movies" :data="topRatedMovies" />
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async asyncData({ store }) {
        await store.dispatch('getTopRatedMovies')
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Top Rated Movies'
        }
    },
    computed: {
        ...mapGetters(['topRatedMovies']),
    }
}
</script>