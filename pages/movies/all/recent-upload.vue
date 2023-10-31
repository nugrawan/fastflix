<template>
    <AllCategory title="All Recent Uploaded Movies" :data="recentMovies" />
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async asyncData({ store }) {
        await store.dispatch('getRecentMovies')
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Recent Uploaded Movies'
        }
    },
    computed: {
        ...mapGetters(['recentMovies']),
    }
}
</script>