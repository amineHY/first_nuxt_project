// app.config.ts
export default defineAppConfig({
    nuxtIcon: {
        size: '30px', // default <Icon> size applied
        class: 'icon', // default <Icon> class applied
        aliases: {
            'nuxt': 'logos:nuxt-icon',
        }
    },
    title: 'Hello App Config',
    description:
        'This is some content coming from app.config.ts that support HMR, try to update it and see it in action.',
    showButton: false
})