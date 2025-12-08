import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Root path for Vercel deployment
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
