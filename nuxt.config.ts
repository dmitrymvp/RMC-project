// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/styles/reset.sass'],
  eslint: {
    config: {
      stylistic: false
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/mixins" as mixins\n@use "@/assets/tokens/colors" as tokens\n'
        }
      }
    }
  }
})