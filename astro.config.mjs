import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const rootDir = dirname(fileURLToPath(import.meta.url));
const pathFromRoot = (relativePath) => resolve(rootDir, relativePath);

export default defineConfig({
  site: 'https://allercat.ru',
  output: 'static',
  integrations: [],
  markdown: {
    gfm: true
  },
  vite: {
    resolve: {
      alias: {
        '@components': pathFromRoot('./src/components'),
        '@layouts': pathFromRoot('./src/layouts'),
        '@content': pathFromRoot('./src/content'),
        '@assets': pathFromRoot('./src/assets')
      }
    }
  }
});
