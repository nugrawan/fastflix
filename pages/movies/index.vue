<template>
    <div class="container mt-2">
        <BreadCrumb :items="[{ text: 'Movies', active: true }]" />
        <AllCategory to="/movies/all/recent-upload" title="Recent Uploaded" :data="recentMovies" :bread="false" />
        <AllCategory to="/movies/all/popular" title="Popular" :data="popularMovies" :bread="false" />
        <AllCategory to="/movies/all/top-rated" title="Top Rated" :data="topRatedMovies" :bread="false" />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async fetch({ store }) {
        await Promise.all([
            store.dispatch('getRecentMovies'),
            store.dispatch('getPopularMovies'),
            store.dispatch('getTopRatedMovies'),
        ]);
        return {}
    },
    head() {
        return {
            title: 'FastFlix - Movies'
        }
    },
    computed: {
        ...mapGetters(['recentMovies', 'popularMovies', 'topRatedMovies']),
    }
}
</script>
<style scoped>
.card {
    width: 100%;
}

section {
    margin-bottom: 1.5rem;
}

h3 {
    margin-bottom: 1rem;
}
</style>