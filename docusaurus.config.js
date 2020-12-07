const path = require("path");

module.exports = {
  title: "老谭の博客",
  tagline: "帮助你提升前端开发技能",
  titleDelimiter: "-",
  url: "http://localhost:3000/",  //网站的网址
  baseUrl: "/",
  favicon: "/static/img/avatar.jpg",
  organizationName: "Frankiness", // Usually your GitHub org/user name.
  projectName: "laotan-blog.top", // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: "老谭",
      logo: {
        alt: "老谭",
        src: "/static/img/avatar.jpg",
        srcDark: "/static/img/avatar.jpg",
      },
      items: [
        {
          to: "/",
          label: "博客",
          position: "right",
          items: [
            {
              label: "前端",
              to: "tags/前端",
            },
            {
              label: "生活",
              to: "tags/生活",
            },
            
          ],
        },
        
        
        {
          href: "https://github.com/Frankiness",
          label: "GitHub",
          position: "right",
        },

      ],
    },
    footer: {
      style: "dark",
      links: [
        
        {
          title: "Social",
          items: [
            {
              label: "博客",
              to: "/",
            },
            {
              label: "GitHub",
              href: "https://github.com/Frankiness",
            },
            
          ],
        },
        {
          title: "友情链接",
          items: [
            {
              label: "百度一下",
              to: "https://www.baidu.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 老谭 (谭宇林) Built with Docusaurus.<p>冀ICP备14007097号-3</p>`,
    },
    prism: {
      darkTheme: require("prism-react-renderer/themes/vsDark"),
      defaultLanguage: "javascript",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Frankiness/blog/tree/master/docs",
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          feedOptions: {
            type: "all",
            title: "老谭",
            copyright: `Copyright © ${new Date().getFullYear()} 老谭 (谭宇林) Built with Docusaurus.<p>冀ICP备14007097号-3</p>`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
    // path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
  ],
};
