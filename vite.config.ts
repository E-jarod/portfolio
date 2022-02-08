import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
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
  publicDir: 'src/assets',
  plugins: [vue(), eslintPlugin()],
});
