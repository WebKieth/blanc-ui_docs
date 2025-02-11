import comp from "/Users/nikitahovdun/opensource/blank-ui_docs/src/.vuepress/.temp/pages/pages/react/index.html.vue"
const data = JSON.parse("{\"path\":\"/pages/react/\",\"title\":\"Главная страница справочника по React.js\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"pages/react/readme.md\"}")
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
