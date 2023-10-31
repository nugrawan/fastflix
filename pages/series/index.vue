<template>
    <div class="container mt-2">
        <BreadCrumb :items="[{ text: 'Series', active: true }]" />
        <AllCategory to="/series/all/recent-upload" title="Recent Uploaded" :is-movies="false" :data="recentSeries"
            :bread="false" />
        <AllCategory to="/series/all/popular" title="Popular" :is-movies="false" :data="popularSeries" :bread="false" />
        <AllCategory to="/series/all/top-rated" title="Top Rated" :is-movies="false" :data="topRatedSeries"
            :bread="false" />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async fetch({ store }) {
        await Promise.all([
            store.dispatch('getRecentMovies', true),
            store.dispatch('getPopularMovies', true),
            store.dispatch('getTopRatedMovies', true),
        ]);
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Series'
        }
    },
    computed: {
        ...mapGetters(['recentSeries', 'popularSeries', 'topRatedSeries']),
    }
}
</script>