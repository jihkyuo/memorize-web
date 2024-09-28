import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: /^@(?=\/)/, replacement: path.resolve(__dirname, './src') },
    ],
    // alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }]
  },
  plugins: [ 
    TanStackRouterVite(), 
    react(), 
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
      include: "**/*.svg",
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/shared/test/setupTests.ts',
  },
});
