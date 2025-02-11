export const themeData = JSON.parse("{\"logo\":\"/logo.svg\",\"logoDark\":\"/logoDark.svg\",\"sidebar\":{\"/\":false,\"/vue/\":[{\"text\":\"Vue модули\",\"link\":\"/vue/\",\"children\":[{\"text\":\"Компоненты\",\"prefix\":\"components/\",\"link\":\"components/\",\"children\":[{\"text\":\"Button\",\"link\":\"button/\"},{\"text\":\"Checkbox\",\"link\":\"checkbox/\"},{\"text\":\"Dropdown\",\"link\":\"dropdown/\"},{\"text\":\"Icon\",\"link\":\"icon/\"},{\"text\":\"Input\",\"link\":\"input/\"},{\"text\":\"Modal\",\"link\":\"modal/\"},{\"text\":\"Table\",\"link\":\"table/\"},{\"text\":\"Toast\",\"link\":\"toast/\"}]},{\"text\":\"Плагины\",\"prefix\":\"plugins/\",\"link\":\"plugins/\",\"children\":[{\"text\":\"view-layers\",\"link\":\"view-layers/\"}]}]}],\"/react/\":[{\"text\":\"React модули\",\"link\":\"/react/\",\"children\":[{\"text\":\"Компоненты\",\"prefix\":\"components/\",\"link\":\"components/\",\"children\":[{\"text\":\"Button\",\"link\":\"button/\"},{\"text\":\"Checkbox\",\"link\":\"checkbox/\"},{\"text\":\"Icon\",\"link\":\"icon/\"},{\"text\":\"Input\",\"link\":\"input/\"},{\"text\":\"Table\",\"link\":\"table/\"}]},{\"text\":\"Провайдеры\",\"prefix\":\"providers/\",\"link\":\"providers/\",\"children\":[]}]}]},\"navbar\":[{\"text\":\"React модули\",\"link\":\"/react/\"},{\"text\":\"Vue модули\",\"link\":\"/vue/\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
