// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    theme: {
        extends: {
            colors: {
                primary: '#5267df',
            }
        }
    }
})
