<template>
    <TheDetail :datas="movieDetail" :streams="movieStream" />
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async asyncData({ store, params }) {
        await store.dispatch('getMovieDetail', params.id);
        await store.dispatch('getMovieStream', params.id);
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Detail: ' + this.$route.params.id
        }
    },
    computed: {
        ...mapGetters(['movieDetail', 'movieStream']),
    },
}
</script>