export const siteData = JSON.parse("{\"base\":\"/blanc-ui_docs/\",\"lang\":\"ru-RU\",\"title\":\"Blanc UI\",\"description\":\"Blanc UI Документация\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/x-icon\",\"href\":\"/favicon.ico\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/fonts/index.css\"}],[\"script\",{\"src\":\"https://unpkg.com/@tailwindcss/browser@4\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
