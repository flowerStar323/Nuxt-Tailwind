import 'dotenv/config'

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js test' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://nuxtjs.org/favicon.ico' }
    ],
    scriot: [{

    }]
  },
  buildModules: [
    "@nuxtjs/tailwindcss"
  ],
  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '@/assets/main.css'
  ],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  auth: {
    redirect: {
    },
    strategies: {
      local: false,
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID
      }
    }
  },
  build: {
    publicPath: process.env.PUBLIC_PATH,
  },

}
