<template>
    <TheDetail :datas="serieDetail" :streams="serieStream" />
</template>
  
<script>
import { mapGetters } from 'vuex'
export default {
    async asyncData({ store, params }) {
        await store.dispatch('getSerieDetail', params.id);
        await store.dispatch('getSerieStream', params.id);
        return {};
    },
    head() {
        return {
            title: 'FastFlix - Detail: ' + this.$route.params.id
        };
    },
    computed: {
        ...mapGetters(['serieDetail', 'serieStream']),
    },
}
</script>
  