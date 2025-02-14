import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://sysadmin-prithvi.github.io/demoWebsite/",
    output: 'static',
    outDir: './docs',
    build: {
      assets: 'astro'
    }
});
