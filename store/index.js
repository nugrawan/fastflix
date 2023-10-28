export const state = () => ({
    recentMovies: [],
    recentSeries: [],
    popularMovies: [],
    popularSeries: [],
    topRatedMovies: [],
    topRatedSeries: [],
    countries: [],
    countryList: [],
    years: [],
    yearList: [],
    movieDetail: {},
    serieDetail: {},
    movieStream: {},
    serieStream: {},
    genreList: [],
    searchedMovies: [],
    genres: [
        "action",
        "adventure",
        "animation",
        "biography",
        "comedy",
        "crime",
        "documentary",
        "drama",
        "family",
        "fantasy",
        "history",
        "horror",
        "music",
        "mystery",
        "romance",
        "school",
        "sci-fi",
        "sport",
        "thriller",
        "war"
    ]
});

export const mutations = {
    RECENT_MOVIES(state, data) {
        state.recentMovies = data;
    },
    RECENT_SERIES(state, data) {
        state.recentSeries = data;
    },
    POPULAR_MOVIES(state, data) {
        state.popularMovies = data;
    },
    POPULAR_SERIES(state, data) {
        state.popularSeries = data;
    },
    TOP_RATED_MOVIES(state, data) {
        state.topRatedMovies = data;
    },
    TOP_RATED_SERIES(state, data) {
        state.topRatedSeries = data;
    },
    COUNTRIES(state, data) {
        state.countries = data;
    },
    COUNTRY_LIST(state, data) {
        state.countryList = data;
    },
    YEARS(state, data) {
        state.years = data;
    },
    YEAR_LIST(state, data) {
        state.yearList = data;
    },
    SEARCHED_MOVIES(state, data) {
        state.searchedMovies = data;
    },
    MOVIE_DETAIL(state, data) {
        state.movieDetail = data;
    },
    SERIE_DETAIL(state, data) {
        state.serieDetail = data;
    },
    MOVIE_STREAM(state, data) {
        state.movieStream = data;
    },
    SERIE_STREAM(state, data) {
        state.serieStream = data;
    },
    GENRES(state, data) {
        state.genres = data;
    },
    GENRE_LIST(state, data) {
        state.genreList = data;
    },
};

export const actions = {
    async getRecentMovies({ commit }, isSeries = false) {
        const movies = await this.$axios.get(isSeries ? '/series' : '/movies');
        commit(isSeries ? 'RECENT_SERIES' : 'RECENT_MOVIES', movies.data);
    },
    async getPopularMovies({ commit }, isSeries = false) {
        const movies = await this.$axios.get(isSeries ? 'popular/series' : '/popular/movies');
        commit(isSeries ? 'POPULAR_SERIES' : 'POPULAR_MOVIES', movies.data);
    },
    async getTopRatedMovies({ commit }, isSeries = false) {
        const movies = await this.$axios.get(isSeries ? '/top-rated/series' : '/top-rated/movies');
        commit(isSeries ? 'TOP_RATED_SERIES' : 'TOP_RATED_MOVIES', movies.data);
    },
    async getCountries({ commit }) {
        const countries = await this.$axios.get('/countries');
        commit('COUNTRIES', countries.data);
    },
    async getCountryList({ commit }, country) {
        const movies = await this.$axios.get('/countries/' + country);
        commit('COUNTRY_LIST', movies.data);
    },
    async getYears({ commit }) {
        const years = await this.$axios.get('/years');
        commit('YEARS', years.data);
    },
    async getGenreList({ commit }, genre) {
        const movie = await this.$axios.get('/genres/' + genre);
        commit('GENRE_LIST', movie.data);
    },
    async getYearList({ commit }, year) {
        const movies = await this.$axios.get('/years/' + year);
        commit('YEAR_LIST', movies.data);
    },
    async searchMovies({ commit }, id) {
        const movies = await this.$axios.get('/search/' + id);
        commit('SEARCHED_MOVIES', movies.data);
    },
    async getMovieDetail({ commit }, id) {
        try {
            const response = await this.$axios.get(`/movies/${id}`);
            commit('MOVIE_DETAIL', response.data);
        } catch (error) {
            console.error('Error in getMovieDetail:', error);
        }
    },
    async getMovieStream({ commit }, id) {
        try {
            const response = await this.$axios.get(`/movies/${id}/streams`);
            commit('MOVIE_STREAM', response.data);
        } catch (error) {
            console.error('Error in getMovieStream:', error);
        }
    },
    async getSerieDetail({ commit }, id) {
        try {
            const response = await this.$axios.get(`/series/${id}`);
            commit('SERIE_DETAIL', response.data);
        } catch (error) {
            console.error('Error in getMovieDetail:', error);
        }
    },
    async getSerieStream({ commit }, id) {
        try {
            const response = await this.$axios.get(`series/${id}/streams`);
            commit('SERIE_STREAM', response.data);
        } catch (error) {
            console.error('Error in getMovieStream:', error);
        }
    }
};

export const getters = {
    recentMovies: (state) => state.recentMovies,
    recentSeries: (state) => state.recentSeries,
    popularMovies: (state) => state.popularMovies,
    popularSeries: (state) => state.popularSeries,
    topRatedMovies: (state) => state.topRatedMovies,
    topRatedSeries: (state) => state.topRatedSeries,
    countries: (state) => state.countries,
    countryList: (state) => state.countryList,
    genres: (state) => state.genres,
    genreList: (state) => state.genreList,
    years: (state) => state.years,
    yearList: (state) => state.yearList,
    searchedMovies: (state) => state.searchedMovies,
    movieDetail: (state) => state.movieDetail,
    serieDetail: (state) => state.serieDetail,
    movieStream: (state) => state.movieStream,
    serieStream: (state) => state.serieStream,
};