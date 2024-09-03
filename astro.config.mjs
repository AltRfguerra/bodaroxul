import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    sitemap()
  ],
  server: {
    host: '0.0.0.0',
  },
  site: 'https://altrfguerra.github.io/bodaroxul/',  // Asegúrate de que esta sea la URL correcta de tu sitio
  output: 'static',
  outDir: 'docs',  // Define 'docs' como la carpeta de salida
  build: {
    rollupOptions: {
      input: {
        main: 'src/styles/sass/main.scss',  // Ruta al archivo principal SCSS
      },
      output: {
        dir: 'docs/_astro',  // Carpeta donde se generarán los archivos JS y CSS
        format: 'esm',  // Formato de salida del script JS
      }
    }
  }
});
