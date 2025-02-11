import comp from "/Users/nikitahovdun/opensource/blank-ui_docs/src/.vuepress/.temp/pages/pages/vue/index.html.vue"
const data = JSON.parse("{\"path\":\"/pages/vue/\",\"title\":\"Главная страница справочника по Vue.js\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"pages/vue/readme.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
