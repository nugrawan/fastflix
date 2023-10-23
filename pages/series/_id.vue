<template>
    <TheDetail :datas="movieDetail" :streams="movieStream" />
    <!-- <div>
        {{ movieDetail }}
    </div> -->
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    head() {
        return {
            title: 'FastFlix - Detail: ' + this.$route.params.id
        }
    },
    computed: {
        ...mapState(['movieDetail', 'movieStream']),
    },
    mounted() {
        this.getMovieDetail(this.$route.params.id)
        this.getMovieStream(this.$route.params.id)
    },
    methods: {
        ...mapActions(['getMovieDetail', 'getMovieStream']),
    }
}
</script>