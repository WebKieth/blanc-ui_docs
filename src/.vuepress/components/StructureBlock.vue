<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, inject, computed } from 'vue';
import { StructureInfo } from './types';



const props = defineProps<{
  name: string
  width: number
  height: number
}>()

const $rect = ref<HTMLDivElement>()

const info = inject<StructureInfo>('structure-info')

const contents = computed(() => info ? info[props.name] : null)

const handleMouseEnter = (e: MouseEvent) => {
  const $popover = document.querySelector(`[data-element=structureInfoPopover][data-key=${props.name}]`) as HTMLDivElement
  console.log($popover)
  if (!$popover) return
  $popover.style.top = `${e.pageY + 12  - ($popover.clientHeight / 2)}px`
  $popover.style.left = `${e.pageX + 12}px`
  $popover.style.pointerEvents = 'auto'
  $popover.style.opacity = '1'
}

const handleMouseMove = (e: MouseEvent) => {
  const $popover = document.querySelector(`[data-element=structureInfoPopover][data-key=${props.name}]`) as HTMLDivElement
  if (!$popover) return

  $popover.style.top = `${e.pageY + 12 - ($popover.clientHeight / 2)}px`
  $popover.style.left = `${e.pageX + 12}px`
}

const handleMouseLeave = () => {
  const $popover = document.querySelector(`[data-element=structureInfoPopover][data-key=${props.name}]`) as HTMLDivElement
  if (!$popover) return
  $popover.style.top = `0`
  $popover.style.left = `0`
  $popover.style.pointerEvents = 'none'
  $popover.style.opacity = '0'
}

</script>
<template>
  <div
    ref="$rect"
    class="rect flex flex-col items-center justify-center"
    :data-name="props.name"
    :style="`width: ${props.width}px; height: ${props.height}px;`"
    @mouseenter="handleMouseEnter"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
    <Teleport to="body" v-if="contents">
      <div
        class="popover"
        :key="name"
        data-element="structureInfoPopover"
        :data-key="name"
      >
        <StructureInfoContents :name="name" :info="contents" />
      </div>
    </Teleport>
  </div>
</template>
<style lang="scss" scoped>
.rect {
  &:hover {
    box-shadow: 0 5px 10px rgba(23,23,23, 0.4);
  }
}
.popover {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  padding: 8px 12px;
  background-color: white;
  border-radius: 8px;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(70, 70, 70, 0.3);
}
</style>
