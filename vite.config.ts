import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    })
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      containers: `${path.resolve(__dirname, './src/containers')}`,
      icons: `${path.resolve(__dirname, './src/components/icons')}`,
      core: path.resolve(__dirname, './src/core'),
      helpers: `${path.resolve(__dirname, './src/helpers')}`,
      store: `${path.resolve(__dirname, './src/store')}`,
      src: `${path.resolve(__dirname, './src')}`,
    },
  },
});
