/**
 * 站点基本配置，导出一个对象
 */

 module.exports = {
   title: 'XX-UI', //网站的标题。这将是所有页面标题的前缀，并显示在默认主题的导航栏中
   description: 'Just For Fun', //网站描述。这将在页面 HTML 中表现为一个 <meta> 标签。
   head: [ //被注入页面 HTML <head> 额外的标签。每个标签可以用 [tagName, { attrName: attrValue }, innerHTML?] 的形式指定
   ],
   base: '/docs/',
   port: '', //指定用于 dev 服务器的端口
   dest: '.vuepress/dist', //指定 vuepress build 的输出目录, default: .vuepress/dist
   ga: '', //提供 Google AnalyticsID 来开启集成
   serviceWorker: false, //如果设置为 true，VuePress 将自动生成并注册一个 service worker ，这个 worker 将内容缓存以供离线使用（仅在生产环境中启用）
  //  theme: '', //指定此选项来使用自定义主题。使用 “foo” 的值，VuePress 将尝试在 node_modules/vuepress-theme-foo/Layout.vue 加载主题组件
   themeConfig: { //为使用的主题提供配置选项。这些选项将根据你使用的主题而有所不同。
    nav: [
    ],
    sidebar: {
      '/views/': [
        {
          title: '介绍',
          collapsable: false,
          children: [
            'introduce',
            'install'
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            'button',
            'tag',
          ]
        }
      ]
    }
   },
   configureWebpack: { //配置webpack

   }
 }