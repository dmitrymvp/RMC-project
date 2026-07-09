// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-svgo', '@pinia/nuxt'],
  css: ['~/assets/styles/reset.sass'],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;700;900&display=swap'
        }
      ]
    }
  },
  eslint: {
    config: {
      stylistic: false
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/mixins" as *\n@use "@/assets/tokens/colors" as *\n'
        }
      }
    }
  }
})
