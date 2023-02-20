// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: { global: true, dirs: ['~/components'] },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@nuxtjs/color-mode',
        '@nuxt/content',

    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    colorMode: {
        preference: 'dark', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storageKey: 'nuxt-color-mode'
        // classSuffix: '',

    },
    i18n: {
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
            },
            {
                code: 'fr',
                iso: 'fr-FR',
                name: 'Français',
            },
        ],
        defaultLocale: 'fr',
        vueI18n: {
            fallbackLocale: 'fr',
            messages: {
                en: {
                    home: 'Home',
                    about: 'About',
                    contact: 'Contact',
                    publication: 'Publication',
                    blog: 'Blog',
                },
                fr: {
                    home: 'Accueil',
                    about: 'À propos',
                    contact: 'Contact',
                    publication: 'Publication',
                    blog: 'Blog',
                },
            },
        },
        strategy: 'prefix_except_default',
        // lazy: true,
        // langDir: 'locales/',
    },

    app: {
        head: {
            title: 'Amine Hadj-Youcef',
            meta: [
                { name: 'description', content: 'page personnel de Amine HADJ-YOUCEF, Lead Data Scientist, Paris' }
            ],
            link: [
                {
                    rel: 'stylesheet', href: "https://fonts.googleapis.com/icon?family=Material+Icons"
                }
            ]
        }
    }
});