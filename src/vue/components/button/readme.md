# Button

### Применение

Сначала импортируйте кнопку в свой компонент, при необходимости кастомизации установите ей свои style и variants, расширьте props.  

```vue title='MyButton.vue'
<script lang='ts' setup>
import { Button } from 'blanc-ui/vue'
import { type ButtonProps } from 'blanc-ui/vue/types'
const props = defineProps<ButtonProps>()
</script>
<template>
  <Button
    :style="props.style"
    :variants="props.variants"
    :disabled="props.disabled"
    :active="props.active"
    :whenClick="props.whenClick"
  >
    <slot/>
  </Button>
</template>
```

> Кнопка - очень насыщенный на variants компонент. В ней заложены как базовые variants, так и для группы. В этом разделе мы рассмотрим только базовые. Документация групповых variants описана в разделе buttonGroup.  