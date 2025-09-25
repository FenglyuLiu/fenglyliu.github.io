import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'


export default defineConfig({
site: 'https://your-domain.com', // 用于正确生成 OG/Sitemap（可留空）
integrations: [tailwind(), mdx(), react()],
scopedStyleStrategy: 'where',
vite: {
  resolve: {
    alias: {
      '@': new URL('./src/', import.meta.url).pathname
    }
  }
}
})