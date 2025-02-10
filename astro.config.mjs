import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import mdx from '@astrojs/mdx';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  integrations: [react(), tailwind(), sitemap(), partytown(), mdx()],
  site: 'https://your-website.com',
  output: 'static',
  vite: {
    plugins: [tailwind()],
  },
});