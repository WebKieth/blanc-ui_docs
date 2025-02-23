<script lang="ts"setup>
import { onBeforeUnmount, watch, ref, provide } from 'vue';

type StructureInfo = Record<string, string | Record<string, string>>

const {
  info = {},
} = defineProps<{
  width?: number
  height?: number
  info?: StructureInfo
}>()
provide<StructureInfo>('structure-info', info)
</script>
<template>
  <div class="mt-4 relative z-10">
    <slot />
  </div>
</template>
