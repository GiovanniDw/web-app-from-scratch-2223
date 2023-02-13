import { defineConfig, loadEnv } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  define: {
    'process.env': {}
  },
});
