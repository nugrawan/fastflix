<template>
    <AllCategory title="All Popular Movies" :data="popularMovies" />
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async asyncData({ store }) {
        await store.dispatch('getPopularMovies')
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Popular Movies'
        }
    },
    computed: {
        ...mapGetters(['popularMovies']),
    }
}
</script>