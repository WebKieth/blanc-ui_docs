import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import tailwindcss from '@tailwindcss/vite';

const BUNDLER_CONFIG = {
  plugins: [
    tailwindcss()
  ]
}

const THEME_CONFIG = {
  logo: '/logo.svg',
  logoDark: '/logoDark.svg',
  sidebar: {
    '/': false,
    '/vue/': [
      {
        text: 'Vue модули',
        link: '/vue/',
        children: [
          {
            text: 'Компоненты',
            prefix: 'components/',
            link: 'components/',
            children: [
              {
                text: 'Button',
                link: 'button/'
              }, {
                text: 'Checkbox',
                link: 'checkbox/'
              }, {
                text: 'Dropdown',
                link: 'dropdown/'
              }, {
                text: 'Icon',
                link: 'icon/'
              }, {
                text: 'Input',
                link: 'input/'
              }, {
                text: 'Modal',
                link: 'modal/'
              }, {
                text: 'Table',
                link: 'table/'
              }, {
                text: 'Toast',
                link: 'toast/'
              }
            ]
          },
          {
            text: 'Плагины',
            prefix: 'plugins/',
            link: 'plugins/',
            children: [
              {
                text: 'view-layers',
                link: 'view-layers/'
              }
            ]
          }
        ]
      }
    ],
    '/react/': [
      {
        text: 'React модули',
        link: '/react/',
        children: [
          {
            text: 'Компоненты',
            prefix: 'components/',
            link: 'components/',
            children: [
              {
                text: 'Button',
                link: 'button/'
              }, {
                text: 'Checkbox',
                link: 'checkbox/'
              }, {
                text: 'Icon',
                link: 'icon/'
              }, {
                text: 'Input',
                link: 'input/'
              }, {
                text: 'Table',
                link: 'table/'
              }
            ]
          },
          {
            text: 'Провайдеры',
            prefix: 'providers/',
            link: 'providers/',
            children: []
          }
        ]
      }
    ]
  },
  navbar: [
    {
      text: 'React модули',
      link: '/react/'
    }, {
      text: 'Vue модули',
      link: '/vue/'
    }
  ]
}

export default defineUserConfig({
  bundler: viteBundler(BUNDLER_CONFIG),
  theme: defaultTheme(THEME_CONFIG),
  lang: 'ru-RU',
  title: 'Blanc UI',
  description: 'Blanc UI Документация',
  base: '/blanc-ui_docs/',
  head: [
    ['link', {rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico'}],
    ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Handjet:wght@100..900&display=swap'}]
    ['script', {src: 'https://unpkg.com/@tailwindcss/browser@4'}]
  ]
})