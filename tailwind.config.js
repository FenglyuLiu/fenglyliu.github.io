/**** Tailwind config ****/
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx}', './content/**/*.{md,mdx}'],
    darkMode: 'class', // 启用基于类的暗黑模式
    safelist: [
    // 渐变相关类可能来自 frontmatter，需要显式保留
    'bg-gradient-to-r', 'bg-gradient-to-br', 'bg-gradient-to-b', 'bg-gradient-to-l', 'bg-gradient-to-tr',
    'from-white', 'to-white',
    'from-[#FF9B9C]', 'to-[#FF9B9C]',
    // 暗黑模式渐变类
    'dark:bg-[linear-gradient(90deg,_#1E3A5F_0%,_#2D4A6B_100%)]',
    'bg-[linear-gradient(90deg,_#EDF4FC_0%,_#DDF1FD_100%)]'
    ],
    theme: {
    extend: {
    colors: {
    highlight: '#21D4FD' // 彩色点缀：可在 src/styles/global.css 中以 CSS 变量覆盖
    },
    boxShadow: {
    line: '0 0 0 1px rgba(0,0,0,0.08)'
    }
    }
    },
    plugins: []
    }