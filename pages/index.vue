<template>
  <div>
    <SwiperSection :data="recentMovies" title="Recent Uploaded Movies" />
    <SwiperSection :data="recentSeries" title="Recent Uploaded Series" :is-movie="false" />
    <SwiperSection :data="popularMovies" title="Popular Movies" />
    <SwiperSection :data="popularSeries" title="Popular Series" :is-movie="false" />
    <SwiperSection :data="topRatedMovies" title="Top Rated Movies" />
    <SwiperSection :data="topRatedSeries" title="Top Rated Series" :is-movie="false" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'home',
  async fetch({ store }) {
    await Promise.all([
      store.dispatch('getCountries'),
      store.dispatch('getRecentMovies'),
      store.dispatch('getRecentMovies', true),
      store.dispatch('getPopularMovies'),
      store.dispatch('getPopularMovies', true),
      store.dispatch('getTopRatedMovies'),
      store.dispatch('getTopRatedMovies', true),
    ]);
    return {}
  },
  computed: {
    ...mapGetters(['countries', 'recentMovies', 'popularMovies', 'topRatedMovies', 'recentSeries', 'popularSeries', 'topRatedSeries'])
  },
}
</script>
