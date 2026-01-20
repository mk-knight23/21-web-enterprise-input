import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
    },
    server: {
        port: 3000,
        open: true,
    }
});
