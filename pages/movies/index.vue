<template>
    <div>
        <SwiperSection :data="recentMovies" title="Recent upload" />
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    head() {
        return {
            title: 'FastFlix - Series'
        }
    },
    computed: {
        ...mapState(['recentMovies']),
    },
    mounted() {
        this.getRecentMovies()
    },
    methods: {
        ...mapActions(['getRecentMovies'])
    }
}
</script>