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
                    <b-nav-item-dropdown text="Country" right>
                        <b-dropdown-item v-for="country in countries" :key="country.name"
                            :to="'/country/' + country.parameter">{{ country.name }}
                            <b-badge variant="dark">{{ country.numberOfContents }}</b-badge>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="md" placeholder="Search"></b-form-input>
                        <b-button size="md" class="my-2 my-sm-0" type="submit" variant="danger">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async asyncData({ store }) {
        await store.dispatch('getCountries')
        return {}
    },
    computed: {
        ...mapGetters(['countries'])
    }
}
</script>
<style>
header {
    background-color: black;
    width: 100%;
}

.dropdown-menu {
    background-color: black;
    max-height: 100vh;
    overflow-y: auto;
    height: auto;
    flex-wrap: wrap;
    width: 15rem;
}
</style>
<style scoped>
.badge {
    position: relative;
}
</style>