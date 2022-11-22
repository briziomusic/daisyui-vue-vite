import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: { 
    // github pages reads static content from root or docs folder
    outDir: 'docs', 
    emptyOutDir: true 
  }
  //base: '/daisyui-vue-vite/'
});
