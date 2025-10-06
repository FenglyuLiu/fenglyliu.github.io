// 以 import.meta.glob 读取顶层 content/ 下的项目 MDX（不使用 Astro content collections，保持 JS）
const modules = import.meta.glob('../../content/projects/**/index.mdx')


export async function getAllProjects() {
const entries = []
for (const [path, loader] of Object.entries(modules)) {
const mod = await loader()
const fm = mod.frontmatter || {}
const folderSlug = path.split('/').slice(-2, -1)[0]
const finalSlug = fm.slug || folderSlug

// 只显示状态为 "shipped" 的项目
if (fm.status !== 'shipped') {
  continue
}

  const cover = typeof fm.cover === 'string'
? (fm.cover.startsWith('./')
  ? `/projects/${finalSlug}/${fm.cover.replace('./', '')}`
  : fm.cover)
: ''
  const hoverCover = typeof fm.hoverCover === 'string'
  ? (fm.hoverCover.startsWith('./')
    ? `/projects/${finalSlug}/${fm.hoverCover.replace('./', '')}`
    : fm.hoverCover)
  : ''
  const darkCover = typeof fm.darkCover === 'string'
  ? (fm.darkCover.startsWith('./')
    ? `/projects/${finalSlug}/${fm.darkCover.replace('./', '')}`
    : fm.darkCover)
  : ''
  const hoverScale = typeof fm.hoverScale === 'number' ? fm.hoverScale : 1
  const hoverTop = typeof fm.hoverTop === 'string' ? fm.hoverTop : '40%'
  const showHoverImage = typeof fm.showHoverImage === 'boolean' ? fm.showHoverImage : true
entries.push({
slug: finalSlug,
url: `/projects/${finalSlug}/`,
title: fm.title || finalSlug,
subtitle: fm.subtitle || '',
    cover,
    hoverCover,
    darkCover,
    hoverScale,
    hoverTop,
    showHoverImage,
order: fm.order || 999,
    tags: fm.highlights || [],
    bgClass: fm.cardBg || '',
module: mod
})
}
return entries.sort((a, b) => a.order - b.order)
}


export async function getProjectBySlug(slug) {
for (const [path, loader] of Object.entries(modules)) {
const folderSlug = path.split('/').slice(-2, -1)[0]
const mod = await loader()
const fm = mod.frontmatter || {}
const finalSlug = fm.slug || folderSlug
if (finalSlug === slug) {
  // 处理封面图路径，与 getAllProjects 保持一致
  const cover = typeof fm.cover === 'string'
    ? (fm.cover.startsWith('./')
      ? `/projects/${finalSlug}/${fm.cover.replace('./', '')}`
      : fm.cover)
    : ''
  const darkCover = typeof fm.darkCover === 'string'
    ? (fm.darkCover.startsWith('./')
      ? `/projects/${finalSlug}/${fm.darkCover.replace('./', '')}`
      : fm.darkCover)
    : ''
  
  // 返回处理后的 frontmatter
  const processedFrontmatter = {
    ...fm,
    cover,
    darkCover
  }
  
  return { module: mod, frontmatter: processedFrontmatter }
}
}
return null
}