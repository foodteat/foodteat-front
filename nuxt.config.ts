// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  tailwindcss: {
    cssPath: "~/assets/css/input.css",
  },
  css: [],
  app: {
    head: {
      charset: "utf-16",
      title: "FoodTeat",
      meta: [{ name: "description", content: "FoodTeat Oficial Website" }],
      bodyAttrs: {
        class: "dark", // TODO: REPLACE THIS FOR A BUTTON AND PUT THIS CLASS IN THE BODY
      },
    },
  },
  plugins: [],
})
