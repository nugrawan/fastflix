<template>
  <div>
    <SwiperSection :data="recentMovies" title="Recent upload" />
    <SwiperSection :data="popularMovies" title="Popular" />
    <SwiperSection :data="topRatedMovies" title="Top Rated" />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  layout: 'home',
  computed: {
    ...mapState(['recentMovies', 'popularMovies', 'topRatedMovies']),
  },
  mounted() {
    this.getRecentMovies()
    this.getPopularMovies()
    this.getTopRatedMovies()
  },
  methods: {
    ...mapActions(['getRecentMovies', 'getPopularMovies', 'getTopRatedMovies'])
  }
}
</script>
