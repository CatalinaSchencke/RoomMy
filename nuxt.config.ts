// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'RoomMy',
      script: [
        {
          src: 'https://kit.fontawesome.com/64d58efce2.js',
          crossorigin: 'anonymous',
        }
      ]
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    },
  }
})