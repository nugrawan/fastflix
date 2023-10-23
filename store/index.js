export const state = () => ({
    recentMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    movieDetail: {},
    movieStream: {},
});

export const mutations = {
    RECENT_MOVIES(state, data) {
        state.recentMovies = data;
    },
    POPULAR_MOVIES(state, data) {
        state.popularMovies = data;
    },
    TOP_RATED_MOVIES(state, data) {
        state.topRatedMovies = data;
    },
    MOVIE_DETAIL(state, data) {
        state.movieDetail = data;
    },
    MOVIE_STREAM(state, data) {
        state.movieStream = data;
    },
};

export const actions = {
    async getRecentMovies({ commit }) {
        const movies = await this.$axios.get('/movies');
        commit('RECENT_MOVIES', movies.data);
    },
    async getPopularMovies({ commit }) {
        const movies = await this.$axios.get('/popular/movies');
        commit('POPULAR_MOVIES', movies.data);
    },
    async getTopRatedMovies({ commit }) {
        const movies = await this.$axios.get('/top-rated/movies');
        commit('TOP_RATED_MOVIES', movies.data);
    },
    async getMovieDetail({ commit }, id) {
        const movies = await this.$axios.get(`/movies/${id}`);
        console.log(movies);
        commit('MOVIE_DETAIL', movies.data);
    },
    async getMovieStream({ commit }, id) {
        const movies = await this.$axios.get(`/movies/${id}/streams`);
        commit('MOVIE_STREAM', movies.data);
    },
};
