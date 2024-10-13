import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: packageJson.homepage,
  plugins: [
    tsconfigPaths(),
    react(),
    svgr(),
    createSvgSpritePlugin({
      symbolId: 'icon-[name]-[hash]',
    }),
    ViteEjsPlugin(viteConfig => ({
      // viteConfig is the current Vite resolved config
      env: viteConfig.env,
    })),
    command === 'build' && nodePolyfills(),
  ],
  build: {
    outDir: packageJson.buildFolderName,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server: {
    open: true,
    host: true,
    port: 3000,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [],
    },
  },
}));
