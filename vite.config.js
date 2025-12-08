import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/motia-widget/', // Replace 'Motia' with your actual GitHub repo name
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'widget.js',
        assetFileNames: 'widget.[ext]',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
