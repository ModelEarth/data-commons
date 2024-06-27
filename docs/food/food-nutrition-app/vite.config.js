import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    root: path.resolve(__dirname),
    build: {
        outDir: path.resolve(__dirname, '../../../dist/food'),
        emptyOutDir: true, // ensure output directory is empty before each build to remove old files
        rollupOptions: {
            input: path.resolve(__dirname, '../index.html'),  //specify entry point for the build
        },
    },
    server: {
        open: 'docs/food',
    },

});