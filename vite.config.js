import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: {
        main: '/index.html',
        codeHub: 'src/pages/code/codeHub.html',
        safeHike: 'src/pages/code/safeHike.html',
        safeHikePrivacy: 'src/pages/code/safeHikePrivacy.html',
        videoHub: 'src/pages/video/videoHub.html',
      }
    },
  },
});
