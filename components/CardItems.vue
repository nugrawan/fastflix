<template>
    <nuxt-link class="card-link" :to="to">
        <b-badge v-if="isMovie" variant="success"> {{ badge }}</b-badge>
        <b-badge v-else variant="danger">Episode {{ badge }}</b-badge>
        <b-card bg-variant="transparent" img-top text-variant="white" :img-src="image" img-alt="poster"
            style="max-width: 20rem;" class="mb-3" :title="title" tag="article">
        </b-card>
    </nuxt-link>
</template>
<script>
export default {
    props: {
        to: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        isMovie: {
            type: Boolean,
            default: true
        },
        badge: {
            type: [Number, String],
            default: null
        },
        image: {
            type: String,
            default: ''
        },
    }
}
</script>
<style>
.card-title {
    font-size: small;
    font-weight: 400;
}

.badge {
    position: absolute;
    z-index: 1;
}

.card-body {
    padding: .5rem;
}

.card-link {
    display: block;
    margin: 0 auto;
}

@media screen and (max-width: 960px) {
    .card-title {
        font-size: smaller;
    }
}

@media screen and (max-width: 580px) {
    .card-title {
        font-size: xx-small;
    }
}
</style>