import legacy from "@vitejs/plugin-legacy";
import ViteRestart from "vite-plugin-restart";

const viteRestartValue = (() => {
    try {
        return ViteRestart({ reload: ["./templates/**/*"] });
    } catch {
        return ViteRestart.default({ reload: ["./templates/**/*"] });
    }
})();

export default ({ command }) => ({
    base: command === "serve" ? "" : "/dist/",
    build: {
        manifest: true,
        outDir: "./web/dist/",
        rollupOptions: {
            input: {
                app: "./src/js/app.js",
                film: "./src/js/film.js",
            },
        },
    },
    server: {
        host: "0.0.0.0",
        strictPort: true,
        port: 3000,
        origin: "https://korterdam.ddev.site:3000",
    },
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
        viteRestartValue
    ],
    
});
