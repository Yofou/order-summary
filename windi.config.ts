import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
    attributify: true,
    theme: {
        colors: {
            blue: {
                100: '#E0E8FF',
                200: '#D6E1FF',
                500: '#382AE1',
            },
            grey: {
                300: '#717FA6',
                800: '#1F2E55',
            },
            purple: '#766CF1'
        },
        boxShadow: {
            'container': "0 40px 40px RGBA(13, 48, 189, 0.15)",
            'acton-button': "0 20px 20px RGBA(56, 42, 225, 0.19)"
        },
        extend: {
            fontFamily: {
                red: ['Red Hat Display', 'sans-serif']
            }
        }
    }
})