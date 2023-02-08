import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'

const config = defineConfig({
  //base:"/xfeng/",
  base:"/xfeng-blob/",
  //outDir:"./xfeng",//输出打包的位置
  title: 'xFeng',
  head: [
    ['link', { rel: 'icon', href: 'https://tianyuhao.cn/images/auto/my.png' }]
  ],
  description,
  themeConfig: {
    logo: 'https://tianyuhao.cn/images/auto/my.png',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Tyh2001/tyh-blog'
      }
    ],
    nav,
    sidebar,
    // editLink: {
    //   pattern: 'https://github.com/Tyh2001/tyh-blog/blob/master/docs/:path'
    // }
    algolia:{
      // appId:'RQVSNXWDBY',
      // apiKey: '58d0808d058f150f994999d1ca610d7d',
      // indexName: 'xfeng-blob',
      // placeholder:"请输入搜索信息",
      // buttonText: "搜索"
      appId: 'RDDXUZAIF1',
      apiKey: '9302db06c2d4f1d7b7d243e7e8d877d7',
      indexName: 'chodocs',
      placeholder: '请输入关键词',
      buttonText: '搜索',
    }
  }
})

export default config
