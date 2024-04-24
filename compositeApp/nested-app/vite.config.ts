import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "nested-app",
            filename: "remoteItems.js",
            exposes: {
                "./NestedApp": "./src/App.tsx",
            },
            shared: ["react"],
        }),
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
})
