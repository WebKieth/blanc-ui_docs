import { defineClientConfig } from 'vuepress/client'
import Intro from './components/Intro.vue'
import Layout from './layouts/Layout.vue'

export default defineClientConfig({
  layouts: { Layout },
  enhance({ app }) {
    app.component('intro', Intro)
  },
})