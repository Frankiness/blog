"use strict";

var path = require("path");

module.exports = {
  title: "老谭の博客",
  tagline: "帮助你提升前端开发技能",
  titleDelimiter: "-",
  url: "https://www.zxuqian.cn",
  //网站的网址
  baseUrl: "/",
  favicon: "img/avatar.jpg",
  organizationName: "Frankiness",
  // Usually your GitHub org/user name.
  projectName: "blog",
  // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: "老谭",
      logo: {
        alt: "老谭",
        src: "img/avatar.jpg",
        srcDark: "img/avatar.jpg"
      },
      items: [{
        to: "/",
        label: "博客",
        position: "right",
        items: [{
          label: "前端",
          to: "tags/前端"
        }, {
          label: "手撕",
          to: "tags/手撕"
        }, {
          label: "面试",
          to: "tags/面试"
        }, {
          label: "JavaScript",
          to: "tags/JavaScript"
        }, {
          label: "生活",
          to: "tags/生活"
        }]
      }, {
        href: "https://github.com/Frankiness",
        label: "GitHub",
        position: "right"
      }]
    },
    footer: {
      style: "dark",
      links: [{
        title: "Social",
        items: [{
          label: "博客",
          to: "/"
        }, {
          label: "GitHub",
          href: "https://github.com/Frankiness"
        }]
      }, {
        title: "友情链接",
        items: [{
          label: "百度一下",
          to: "https://www.baidu.com/"
        }]
      }],
      copyright: "Copyright \xA9 ".concat(new Date().getFullYear(), " \u8001\u8C2D (\u8C2D\u5B87\u6797) Built with Docusaurus.<p>\u5180ICP\u590714007097\u53F7-3</p>")
    },
    prism: {
      darkTheme: require("prism-react-renderer/themes/vsDark"),
      defaultLanguage: "javascript"
    }
  },
  presets: [["@docusaurus/preset-classic", {
    docs: {
      sidebarPath: require.resolve("./sidebars.js"),
      editUrl: "https://github.com/Frankiness/blog/tree/master/docs"
    },
    blog: {
      path: "./blog",
      // routeBasePath: "/",
      feedOptions: {
        type: "all",
        title: "老谭",
        copyright: "Copyright \xA9 ".concat(new Date().getFullYear(), " \u8001\u8C2D (\u8C2D\u5B87\u6797) Built with Docusaurus.<p>\u5180ICP\u590714007097\u53F7-3</p>")
      }
    },
    theme: {
      customCss: require.resolve("./src/css/custom.css")
    },
    sitemap: {
      cacheTime: 600 * 1000,
      // 600 sec - cache purge period
      changefreq: "daily",
      priority: 0.5
    }
  }]],
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"), path.resolve(__dirname, "./src/plugin/plugin-baidu-push") // path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
  ]
};