<template>
    <header>
        <b-navbar toggleable="lg" type="dark" class="p-3">
            <b-navbar-brand to="/">
                <AppLogo />
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/series">Series</b-nav-item>
                    <b-nav-item to="/movies">Movies</b-nav-item>
                    <b-nav-item-dropdown text="Countries" right>
                        <b-dropdown-item v-for="country in sortedCountries" :key="country.name"
                            :to="'/filter/country?country=' + country.parameter">{{ country.name }}
                            <b-badge variant="dark">{{ country.numberOfContents }}</b-badge>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="Years" right>
                        <b-dropdown-item v-for="year in years" :key="year.name"
                            :to="'/filter/year?year=' + year.parameter">{{
                                year.parameter }}
                            <b-badge variant="danger">{{ year.numberOfContents }}</b-badge>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="Genres" right>
                        <b-dropdown-item v-for="genre in genres" :key="genre" :to="'/filter/genre?genre=' + genre">{{
                            genre }}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto search-container">
                    <b-nav-form>
                        <b-form-input v-model="searchId" type="search" placeholder="Title, actors and directors"
                            @keydown.enter="search()">
                            <b-spinner variant="light" label="Spinning"></b-spinner></b-form-input>
                        <b-button :to="'/search/' + searchId" size="md" class="my-2 my-sm-0"
                            variant="danger">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            searchId: ''
        }
    },
    computed: {
        ...mapGetters(['countries', 'years', 'genres']),
        sortedCountries() {
            return [...this.countries].sort((a, b) => a.name.localeCompare(b.name));
        },
    },
    mounted() {
        this.getCountries()
        this.getYears()
    },
    methods: {
        ...mapActions(['getCountries', 'getYears']),
        search() {
            this.$router.push('/search/' + this.searchId);
        }
    }
}

</script>
<style>
header {
    background-color: black;
    width: 100%;
    padding: .5rem;
}

.dropdown-menu {
    background-color: black;
    max-height: 85vh;
    overflow-y: auto;
    height: auto;
    flex-wrap: wrap;
    width: 15rem;
}
</style>
<style scoped>
.search-list {
    position: absolute;
    top: 5rem;
    z-index: 1000;
}

.search-list-item {
    background-color: white;
    right: 5rem;
}

.search-container {
    flex-direction: column;
}

.badge {
    position: relative;
}
</style>