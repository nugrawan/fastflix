<template>
    <b-container class="bv-example-row">
        <div>
            <h3 class="title-detail mb-3">{{ datas.title }}</h3>
        </div>
        <b-row v-if="streams.length > 0" class="stream-container">
            <b-col v-for="stream in streams" v-show="stream.provider === 'HYDRAX'" :key="stream.provider" cols="8"
                class="mx-auto">
                <b-spinner v-if="!stream" variant="white" label="Spinning"></b-spinner>
                <div v-else class="trailer-stream">
                    <b-embed type="iframe" aspect="16by9" :src="stream.url" allowfullscreen></b-embed>
                </div>
            </b-col>
            <b-col v-if="datas.type === 'series'" cols="4" class="season-container">
                <b-card no-body>
                    <b-tabs pills card vertical active-nav-item-class="text-white">
                        <b-tab v-for="season in datas.seasons" :key="season.season"
                            :title="'Season ' + season.season.toString()">
                            <b-button-group v-for="eps in season.totalEpisodes" :key="eps" class="p-2">
                                <b-button variant="outline-light">{{ eps }}</b-button>
                            </b-button-group>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
            <div class="mt-5 p-5 provider-container">
                <h3 class="mb-5">Streaming In New Tab</h3>
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
        </b-row>
        <div v-else class="mt-3">
            <b-alert show variant="danger" dismissible>Can Not Streaming</b-alert>
        </div>
        <section>
            <b-card :img-src="datas.posterImg" img-alt="Card image" img-left class="mb-3">
                <b-card-text>
                    <b-list-group class="ml-3">
                        <b-list-group-item>Release : {{ datas.releaseDate }}</b-list-group-item>
                        <b-list-group-item>Durations : {{ datas.duration }}</b-list-group-item>
                        <b-list-group-item v-show="datas.genres.length > 0">
                            Genres : {{ datas.genres.join(', ') }}
                        </b-list-group-item>
                        <b-list-group-item v-show="datas.status">Status : {{ datas.status }}</b-list-group-item>
                        <b-list-group-item v-show="datas.directors.length > 0">
                            Directors : {{ datas.directors.join(', ') }}
                        </b-list-group-item>

                        <b-list-group-item v-show="datas.countries.length > 0">
                            Countries : {{ datas.countries.join(', ') }}
                        </b-list-group-item>

                        <b-list-group-item v-show="datas.casts.length > 0">
                            Casts : {{ datas.casts.join(', ') }}
                        </b-list-group-item>
                    </b-list-group>
                </b-card-text>
            </b-card>
            <b-card>
                <b-card-text class="w-75 mb-5">{{ datas.synopsis }}</b-card-text>
            </b-card>
        </section>
    </b-container>
</template>
<script>
export default {
    props: {
        streams: {
            type: Array,
            default: function () { }
        },
        datas: {
            type: Object,
            default: function () { }
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
.list-group-item {
    background-color: black;
}

.stream-container {
    padding: 3rem 0;
}

.nav-item a {
    color: white;
}

.nav-pills .nav-link.active {
    background-color: red;
    color: #000;
}

.provider-container {
    color: white;
    margin: 0 auto;
    width: 50%;
}

.provide-item {
    margin-bottom: 1rem;
}

.provider-container h3 {
    text-align: center;
}

.trailer-stream {
    width: 100%;
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