import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TATEN Docs",
  description: "TATEN Team Documentation Hub Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
  nav: [
    { text: "主页", link: "/" },
    { 
      text: "团队", 
      items: [
        { text: "成员信息", link: "/intro/members" },
        { text: "加入我们", link: "/intro/join" }
      ]
    },
    { text: "项目文档", link: "/projects/taten-oj", activeMatch: "/projects/" },
    { text: "管理与规范", items: [
        { text: "会议记录", link: "/meeting/" },
        { text: "开发规范", link: "/standards/" }
    ]},
    { text: "服务手册", link: "/services/", activeMatch: "/services/" },
  ],

  sidebar: {
    "/projects/": [
      {
        text: "进行中项目",
        items: [
          { text: "TATEN-OJ", link: "/projects/taten-oj" },
          { text: "Aniday", link: "/projects/aniday" },
        ]
      }
    ],

    "/meeting/": [
      {
        text: "2026 会议纪要",
        items: [{ text: "01-01 起点会议", link: "/meeting/2026-1-1" }]
      }
    ],

    "/standards/": [
      {
        text: "开发标准",
        items: [
          { text: "颜色与视觉", link: "/standards/color" },
          { text: "Git Commit 规范", link: "/standards/commit" },
          { text: "代码风格", link: "/standards/code-style" }
        ]
      }
    ],

    "/services/": [
      {
        text: "基础设施",
        items: [
          { text: "内网穿透 (frps)", link: "/services/frps" },
        ]
      }
    ]
  },

    socialLinks: [{ icon: "github", link: "https://github.com/TATENcn" }],
  },
});
