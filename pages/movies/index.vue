<template>
    <div>
        <SwiperSection :data="recentMovies" title="Recent upload" />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async fetch({ store }) {
        await store.dispatch('getRecentMovies')
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Movies'
        }
    },
    computed: {
        ...mapGetters(['recentMovies']),
    }
}
</script>