export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FastFlix - Streaming Movie And Series',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favico.ico' }],
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'series-detail',
        path: '/series:id',
        component: resolve(__dirname, 'pages/series/_id.vue')
      })
      routes.push({
        name: 'movies-detail',
        path: '/movies:id',
        component: resolve(__dirname, 'pages/movies/_id.vue')
      })
      routes.push({
        name: 'country-list',
        path: '/filter',
        exact: true,
        component: resolve(__dirname, 'pages/filter/country.vue')
      })
      routes.push({
        name: 'genre-list',
        path: '/filter',
        exact: true,
        component: resolve(__dirname, 'pages/filter/genre.vue')
      })
      routes.push({
        name: 'year-list',
        path: '/filter',
        exact: true,
        component: resolve(__dirname, 'pages/filter/year.vue')
      })
      routes.push({
        name: 'searched-movies',
        path: '/search/:id',
        exact: true,
        component: resolve(__dirname, 'pages/search/_id.vue')
      })
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  bootstrapVue: {
    icons: true,
  },

  // Axios module configuration: s://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  loading: {
    color: 'white',
    height: '3px',
    continuous: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
