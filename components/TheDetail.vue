<template>
    <b-container>
        <!-- <section v-if="datas.trailerUrl !== ''" class="stream-container">
            <div class="trailer-stream">
                <b-embed type="iframe" aspect="16by9" :src="datas.trailerUrl" allowfullscreen></b-embed>
            </div>
        </section> -->
        <section v-for="stream in streams" :key="stream" class="stream-container">
            <div v-if="stream.provider === 'HYDRAX'" class="trailer-stream">
                <b-embed type="iframe" aspect="16by9" :src="stream.url" allowfullscreen></b-embed>
            </div>
        </section>
        <h3 class="mb-3">{{ datas.title }}</h3>
        <section class="mt-4">
            <b-card :img-src="datas.posterImg" img-alt="Card image" img-left class="mb-3">
                <b-card-text>
                    <b-list-group>
                        <b-list-group-item>{{ datas.type }}</b-list-group-item>
                        <b-list-group-item>{{ datas.status }}</b-list-group-item>
                        <b-list-group-item>{{ datas.releaseDate }}</b-list-group-item>
                        <b-list-group-item>{{ datas.duration }}</b-list-group-item>
                        <b-list-group-item>{{ datas.synopsis }}</b-list-group-item>
                    </b-list-group>
                </b-card-text>
            </b-card>
            <div class="mt-3 provider-container">
                <h3 v-if="streams.length > 0">Streaming</h3>
                <h3 v-else disabled>Can Not Streaming</h3>
                <b-row v-for="stream in streams" :key="stream.provider" class="mt-3">
                    <b-col>
                        <b-button target="blank" :href="stream.url" :variant="getButtonVariant(stream.provider)">{{
                            stream.provider
                        }}</b-button>
                    </b-col>
                    <b-row>
                        <b-col v-for="quality in stream.resolutions" :key="quality"> {{ quality }}p</b-col>
                    </b-row>
                </b-row>
            </div>
        </section>
    </b-container>
</template>
<script>
export default {
    props: {
        streams: {
            type: Array,
            default: function () {
                return [];
            }
        },
        datas: {
            type: Object,
            default: function () {
                return {};
            }
        },
    },
    methods: {
        getButtonVariant(provider) {
            if (provider === "CAST") {
                return "success";
            } else if (provider === "HYDRAX") {
                return "danger";
            } else if (provider === "TURBOV") {
                return "primary";
            } else {
                return "info";
            }
        },
    }
}
</script>
<style>
.stream-container {
    padding: 3rem;
}

.provider-container {
    color: white;
    margin: 0 auto;
    max-width: 40%;
}

.provide-item {
    margin-bottom: 1rem;
}

.provider-container h3 {
    text-align: center;
}

.trailer-stream {
    width: 70%;
    margin: 0 auto;
}

.card {
    background: #000;
}

.card-img-left {
    width: auto;
    height: fit-content;
}
</style>