import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';

const viteRestartValue = (() => {
  try {
    return ViteRestart({ reload: ['./templates/**/*'] });
  } catch {
    return ViteRestart.default({ reload: ['./templates/**/*'] });
  }
})();

export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        app: './src/js/app.js',
        filmCarousel: './src/js/carouselFilm.js',
        pageDetector: './src/js/activePage.js',
        filterFilm: './src/js/filterFilm.js',
        countdown: './src/js/countdown.js',
        gsap: './src/js/gsap.js',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    strictPort: true,
    port: 3000,
    origin: 'https://korterdam.ddev.site:3000',
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    viteRestartValue,
  ],
});
