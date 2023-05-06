import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // { enforce: 'pre', ...mdx() },
    // react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
});
