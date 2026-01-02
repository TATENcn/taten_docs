import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TATEN Docs",
  description: "TATEN Team Documentation Hub Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '项目文档', link: '/projects' },
      { text: '会议文件', link: '/meeting' },
      { text: '规范文件', link: '/standards' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '关于我们', link: '/intro/about' },
          { text: '成员信息', link: '/intro/members' }
        ]
      },
      {
        text: '项目文档',
        items: [
          { text: 'TATEN-OJ', link: '/projects/taten-oj' },
          { text: 'Aniday', link: '/projects/aniday' }
        ]
      },
      {
        text: '会议文件',
        items: [
          { text: '2025-1-1 起点会议', link: '/meeting/2026-1-1.md' },
        ]
      },
      {
        text: '规范文件',
        items: [
          { text: '颜色规范', link: '/standards/color.md' },
          { text: 'Commit 信息规范', link: '/standards/commit.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TATENcn' }
    ]
  }
})