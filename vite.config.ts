import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    lib: {
      entry: 'src/lib.ts',
      name: 'qti3',
      formats: ['umd'],
    },
    rollupOptions: {
      external: /^lit-element/,
    },
  },
  plugins: [],
});
