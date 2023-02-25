// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: { global: true, dirs: ["~/components"] },
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/i18n",
        "@nuxtjs/color-mode",
        "@nuxt/content",
        "nuxt-icon",
        "asciidoctor",
        '@nuxt/image-edge',],
    css: ["@/assets/main.css"],
    content: {
        highlight: { theme: "github-light" }, // https://content.nuxtjs.org/api/configuration
    },
    colorMode: {
        preference: 'dark', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        storageKey: 'nuxt-color-mode',
        classSuffix: '-mode',
    },

    i18n: {
        locales: [
            {
                code: "en",
                iso: "en-US",
                name: "English",
                file: "en-US.json",
                flag: "🇫🇷",
                icon: "twemoji:flag-france",
            },
            {
                code: "fr",
                iso: "fr-FR",
                name: "Français",
                file: "fr-FR.json",
                flag: "🇺🇸",
                icon: "twemoji:flag-united-states",
            },
        ],
        // strategy: 'prefix_except_default',
        defaultLocale: "fr",
        lazy: true,
        langDir: "lang/",
        vueI18n: {
            legacy: false,
            fallbackLocale: "fr",
            // messages: {
            //     en: {
            //         home: 'Home',
            //         about: 'About',
            //         contact: 'Contact',
            //         publication: 'PublicationEN',
            //         blog: 'BlogEN',
            //         welcome: 'Welcome',
            //         description: "Hello, my name is Amine Hadj-Youcef. I provide consulting and support for business teams, defining their needs and translating them into technical solutions in Data Science and Machine Learning. I specialize in data collection, analysis, and exploration, as well as the design of analytical dashboards and the production of ML solutions on the cloud. My expertise also extends to project management, with a focus on tracking, direction, and meeting project goals and deadlines."

            //     },
            //     fr: {
            //         home: 'Accueil',
            //         about: 'À propos',
            //         contact: 'Contact',
            //         publication: 'PublicationFR',
            //         blog: 'BlogFR',
            //         welcome: 'Bienvenu',
            //         description: "Bonjour, je m'appelle <strong>Amine Hadj-Youcef</strong>. Je fournis des services de consultation, mentorat et formation, pour les d'entreprise en définissant leurs besoins métiers et en les traduisant en solutions techniques en Data Science et intelligence Artificielle.                    Je suis spécialisé dans la collecte, l'analyse et l'exploration de données, ainsi que dans la conception de tableaux de bord analytiques                     et la production de solutions de ML sur le cloud.Mon expertise s'étend également à la gestion de projet, en mettant l'accent sur le suivi, la direction et l'atteinte des objectifs et des délais du projet."
            //     },
            // },
        },
    },

    app: {
        head: {
            title: "Amine Hadj-Youcef",
            meta: [
                {
                    name: "description",
                    content:
                        "page personnel de Amine HADJ-YOUCEF, Lead Data Scientist, Paris",
                },
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
                },
            ],
        },
    },
});
