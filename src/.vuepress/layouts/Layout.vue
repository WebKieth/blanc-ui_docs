<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout class="flex flex-col h-screen" />
</template>
<style lang="scss">
.vp-page {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
  [vp-content] {
    flex-grow: 1;
    padding-top: 2rem;
  }
  .vp-page-nav {
    padding-bottom: 2rem;
    width: 100%;
    .auto-link {
      flex-grow: 0;
    }
  }
}
.vp-site-name {
  font-family: 'Ticketing';
}
.vp-navbar span a.route-link {
  display: flex;
  align-items: center;
}
</style>