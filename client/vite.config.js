import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Front-end runs on port 3000
    open: true, // Automatically open the browser
    proxy: {
      '/graphql': {
        target: 'http://localhost:4000', // Proxy GraphQL requests to the back-end server
        secure: false,
        changeOrigin: true,
      },
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
