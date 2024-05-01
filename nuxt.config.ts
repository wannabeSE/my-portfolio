import svgLoader from 'vite-svg-loader';
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vueuse/motion/nuxt',
    '@tresjs/nuxt',
  ],

  vite: {
    plugins: [svgLoader()],
  },
})
