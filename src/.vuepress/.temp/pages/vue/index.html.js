import comp from "/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/vue/index.html.vue"
const data = JSON.parse("{\"path\":\"/vue/\",\"title\":\"Концепции Vue модулей\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"Установка компонентов\",\"slug\":\"установка-компонентов\",\"link\":\"#установка-компонентов\",\"children\":[]},{\"level\":3,\"title\":\"Установка плагинов\",\"slug\":\"установка-плагинов\",\"link\":\"#установка-плагинов\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"vue/readme.md\"}")
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
