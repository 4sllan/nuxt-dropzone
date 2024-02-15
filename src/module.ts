import {
    useLogger,
    createResolver,
    defineNuxtModule,
    addComponent
} from '@nuxt/kit'

interface ModuleOptions {

}


const PACKAGE_NAME: string = 'nuxt-dropzone'
export default defineNuxtModule<ModuleOptions>({

    meta: {
        name: PACKAGE_NAME,
        configKey: 'nuxtDropzone',
        // Compatibility constraints
        compatibility: {
            // Semver version of supported nuxt versions
            nuxt: '^3.0.0'
        }
    },

    setup(moduleOptions, nuxt) {
        const logger = useLogger(PACKAGE_NAME)

        const {resolve} = createResolver(import.meta.url)


        addComponent({
            name: "six-dropzone",
            filePath: resolve(`./runtime/dropzone.vue`),
            pascalName: "SixDropzone",
            global: false,
            mode: 'all',
        })
    }
})