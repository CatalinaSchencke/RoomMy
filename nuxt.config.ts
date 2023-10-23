// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/google-fonts', 'nuxt-icon'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'RoomMy',
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
    }
  }
})