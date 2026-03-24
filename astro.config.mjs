import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://yoursite.com',
  integrations: [
    starlight({
      title: 'Docs',
      customCss: ['./src/styles/global.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'Installation', slug: 'getting-started/installation' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Core Concepts', slug: 'guides/core-concepts' },
            { label: 'Configuration', slug: 'guides/configuration' },
            { label: 'Deployment', slug: 'guides/deployment' },
          ],
        },
        {
          label: 'API Reference',
          items: [
            { label: 'Overview', slug: 'reference/overview' },
          ],
        },
      ],
    }),
    mdx(),
    sitemap(),
  ],
});
