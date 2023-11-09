import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@pages': path.resolve(__dirname, './src/app/pages'),
      '@shared': path.resolve(__dirname, './src/app/shared'),
      '@services': path.resolve(__dirname, './src/app/shared/services'),
      '@utils': path.resolve(__dirname, './src/app/shared/utils'),
      '@components': path.resolve(
        __dirname,
        './src/app/shared/components',
      ),
      '@layouts': path.resolve(__dirname, './src/app/shared/layouts'),
    },
  },
  server: {
    port: 3000,
  },
  publicDir: 'src/assets',
  plugins: [vue(), eslint()],
});
