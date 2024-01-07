// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
        "@unocss/nuxt",
        "nuxt-icon",
        "@vueuse/nuxt",
        "@nuxt/image-edge",
        "@pinia/nuxt",
    ],
    pinia: {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
    },
    image: {
        screens: {
            xs: 300,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1500,
            "2xl": 1920,
        },
    },
});
