export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/vue/", { loader: () => import(/* webpackChunkName: "vue_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/vue/index.html.js"), meta: {"title":"Концепции Vue модулей"} }],
  ["/react/", { loader: () => import(/* webpackChunkName: "react_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/react/index.html.js"), meta: {"title":"Главная страница справочника по React.js"} }],
  ["/vue/components/", { loader: () => import(/* webpackChunkName: "vue_components_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/vue/components/index.html.js"), meta: {"title":"Компоненты для Vue"} }],
  ["/vue/plugins/", { loader: () => import(/* webpackChunkName: "vue_plugins_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/vue/plugins/index.html.js"), meta: {"title":"Плагины для Vue"} }],
  ["/react/components/", { loader: () => import(/* webpackChunkName: "react_components_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/react/components/index.html.js"), meta: {"title":"Компоненты для React"} }],
  ["/react/providers/", { loader: () => import(/* webpackChunkName: "react_providers_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/react/providers/index.html.js"), meta: {"title":"Провайдеры для React"} }],
  ["/vue/components/dropdown/", { loader: () => import(/* webpackChunkName: "vue_components_dropdown_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/vue/components/dropdown/index.html.js"), meta: {"title":"Dropdown"} }],
  ["/vue/components/input/", { loader: () => import(/* webpackChunkName: "vue_components_input_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/vue/components/input/index.html.js"), meta: {"title":"Input"} }],
  ["/vue/components/icon/", { loader: () => import(/* webpackChunkName: "vue_components_icon_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/vue/components/icon/index.html.js"), meta: {"title":"Icon"} }],
  ["/vue/components/checkbox/", { loader: () => import(/* webpackChunkName: "vue_components_checkbox_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/vue/components/checkbox/index.html.js"), meta: {"title":"Checkbox"} }],
  ["/vue/components/button/", { loader: () => import(/* webpackChunkName: "vue_components_button_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/vue/components/button/index.html.js"), meta: {"title":"Button"} }],
  ["/vue/components/modal/", { loader: () => import(/* webpackChunkName: "vue_components_modal_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/vue/components/modal/index.html.js"), meta: {"title":"Modal"} }],
  ["/react/components/button/", { loader: () => import(/* webpackChunkName: "react_components_button_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/react/components/button/index.html.js"), meta: {"title":"Button"} }],
  ["/react/components/checkbox/", { loader: () => import(/* webpackChunkName: "react_components_checkbox_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/react/components/checkbox/index.html.js"), meta: {"title":"Checkbox"} }],
  ["/react/components/icon/", { loader: () => import(/* webpackChunkName: "react_components_icon_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/react/components/icon/index.html.js"), meta: {"title":"Icon"} }],
  ["/react/components/input/", { loader: () => import(/* webpackChunkName: "react_components_input_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/react/components/input/index.html.js"), meta: {"title":"Input"} }],
  ["/vue/components/toast/", { loader: () => import(/* webpackChunkName: "vue_components_toast_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/vue/components/toast/index.html.js"), meta: {"title":"Toast"} }],
  ["/react/components/table/", { loader: () => import(/* webpackChunkName: "react_components_table_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/react/components/table/index.html.js"), meta: {"title":"Table"} }],
  ["/vue/components/table/", { loader: () => import(/* webpackChunkName: "vue_components_table_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/vue/components/table/index.html.js"), meta: {"title":"Table"} }],
  ["/vue/plugins/view-layers/", { loader: () => import(/* webpackChunkName: "vue_plugins_view-layers_index.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/vue/plugins/view-layers/index.html.js"), meta: {"title":"view-layers"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/nikitahovdun/opensource/blanc-ui_docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
