// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    assets: '/<rootDir>/assets/'
  },
  image: {
    dir: 'assets/'
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/image'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
