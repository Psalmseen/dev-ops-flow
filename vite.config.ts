/// <reference types="vitest" />
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    coverage: {
      reporter: ['text', 'lcov', 'json', 'html', 'json-summary'],
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80,
    },
  },
  plugins: [
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/'],
      extension: ['.js', '.ts', '.vue'],
      requireEnv: false,
      cypress: true,
    }),
  ],
});
