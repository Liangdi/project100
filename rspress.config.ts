import * as path from 'path';
import { defineConfig } from 'rspress/config';
import ghPages from 'rspress-plugin-gh-pages';
import ga from 'rspress-plugin-google-analytics';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '百万计划',
  description: '开始你的百万计划',
  icon: '/logo.png',
  logo: {
    light: '/logo-rect-light.png',
    dark: '/logo-rect-dark.png',
  },
  themeConfig: {
    socialLinks: [
    ],
    footer:{
      message:'© 2024 百万计划项目组'
    }
  },
  plugins: [
    ghPages({
      repo: 'git@github.com:Liangdi/project100.git',
      branch: 'gh-pages',
      siteBase:'/'
    }),
    ga({
      id: 'G-N7JESR8QFT',
    }),
  ],
});
