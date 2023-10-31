<template>
    <section class="container mt-2">
        <BreadCrumb v-show="bread"
            :items="[isMovies ? { text: 'Movies', href: '/movies' } : { text: 'Series', href: '/series' }, { text: title, active: true }]" />
        <h3>{{ title }}</h3>
        <CardContainer :total="25" :to="to">
            <CardItems v-for="item in data" :key="item.title" class="card" :title="item.title"
                :badge="isMovies ? item.qualityResolution : item.episode"
                :to="`${isMovies ? 'movies' : 'series'}/${item._id}eps=${item.episode}`" :image="item.posterImg"
                :is-movie="isMovies" />
        </CardContainer>
    </section>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: 'All'
        },
        to: {
            type: String,
            default: ''
        },
        bread: {
            type: Boolean,
            default: true
        },
        data: {
            type: Array,
            default: function () {
                return []
            }
        },
        isMovies: {
            type: Boolean,
            default: true
        },
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

.badge {
    left: 1px;
}
</style>