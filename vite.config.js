import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-website/', // Ensure this matches your repository name
  plugins: [react()],
});
