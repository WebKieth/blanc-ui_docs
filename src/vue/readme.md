# Концепции Vue модулей

### Установка компонентов

В пакете не содержится общего плагина глобальной регистрации всех компонентов, поскольку из коробки они не являются готовыми. Их можно использовать со базовыми стилями прямо на экранах интерфейса, но рекомендуется всё же на их основе сделать свои компоненты, в которых уже можно изолировать и установить свой CSS для каждого элемента в компоненте.  
> Стандартные стили компонентов написаны на [vanilla-extract](https://vanilla-extract.style/). Все модули css.ts также экспортируемы, поэтому при его использовании в проекте вам доступен [приём композиции](https://vanilla-extract.style/documentation/style-composition) для расширения базовых стилей.  

Если ваш проект использует vanilla-extract или вам нужны базовые стили для превью компонентов blanc, добавьте их в точку входа:

```ts title='index.ts'
import 'blanc-ui/vue/css'
```

Однако вы ничем не ограничены - можно применять CSS Modules, tailwind и вообще всё что захотите. Все свойства стилей и их вариантов - это обычные классы, то есть, строки.  

#### Cоздание кнопки на базе Blanc UI c tailwindcss:  

```vue title="MyButton.vue"
<script lang="ts" setup>
import { Button, Icon } from 'blanc-ui/vue'
import { type ButtonProps , type IconProps } from 'blanc-ui/vue/types'
const {
  size = 'medium',
  variant = 'primary',
  icon,
  whenClick
} = defineProps<{
  icon?: IconProps['name']
  variant?: 'primary' | 'outlined'
} & Omit<ButtonProps, 'variant'>>()
</script>
<template>
  <Button
    :style="`inline-flex items-center`"
    :variants="{
      'primary': 'bg-blue-600 text-white hover:bg-blue-700',
      'outlined': 'border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-800',
      'small': 'py-1 px-2 text-sm',
      'medium': 'py-1.5 px-2.5',
      'large': 'py-2 px-3 text-lg'
    }"
    :size="size"
    :variant="variant"
    :whenClick="whenClick"
  >
    <Icon v-if='icon' :name='icon' size='small' class='mr-2' />
    <slot />
  </Button>
</template>
```

### Установка плагинов

Так же как и компоненты, плагины абстрактны и устанавливаются по отдельности. Они могут работать необязательно с компонентами Blank UI. Вы можете с их помощью управлять любыми компонентами.  

#### Пример установки
Для глобального провайда во всём проекте:
```ts title="index.ts"
import { ViewLayersPlugin } from 'blanc-ui/vue'
...
Vue.use(ViewLayersPlugin)
...
```
Если вы хотите ограничить видимость плагина:
```vue title="MyAwesomePage.vue"
<script lang="ts" setup>
import { provide, getCurrentInstance } from 'vue'
import { EventBus, $eventBus, Notify, $notify } from 'blanc-ui/vue'
provide<EventBus>($eventBus, new EventBus())
provide<Notify>($notify, new Notify(getCurrentInstance()))
</script>
<template>
<div>
  ...
    <MyAwesomeComponent />
  ...
</div>
</template>
```
```vue title="MyAwesomeComponent.vue"
<script lang="ts" setup>
import { inject } from 'vue'
import {$eventBus, $notify } from 'blanc-ui/vue'
const eventBus = inject<EventBus>($eventBus)
const notify = inject<Notify>($notify)
</script>
```