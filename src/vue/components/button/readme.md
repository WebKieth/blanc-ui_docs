# Button

[Раздел в storybook](https://webkieth.github.io/blanc-ui/vue/?path=/docs/components-button--docs)

### Применение

Для сборки кнопки нужно импортировать её себе в компонент, расширив при необходимости её возмжности и внедрив свои стили.
Базовый шаблон внедрения представлен ниже.

```vue title="Button.vue"
<script type='ts' setup>
import { Button, type ButtonProps } from 'blanc-ui/vue'
import { myButtonStyle, myButtonVariants } from './styles.css'

const props = defineProps<ButtonProps>()
const emit = defineEmits<ButtonEmitters>()
</script>

<template>
  <Button
    :style="myButtonStyle"
    :variants="myButtonVariants"
    v-bind="props"
    @click="(e) => emit('click', e)"
  ><slot /></Button>
</template>
```

### Структура
<StructureScheme
  :info="{
    button: {
      style: 'основной класснейм',
      variants: {
        '<variant>': 'для variant свойства',
        '<size>': 'для size свойства',
        'disabled': 'для disabled свойства',
        'active': 'для active свойства',
        'inGroup': 'если кнопка в группе',
        'first': 'если кнопка первая в группе',
        'last': 'если кнопка первая в группе',
        'middle': 'если кнопка в середине группы',
        '<variant>_disabled': 'стили сочетания свойств variant с disabled',
        '<variant>_active': 'стили сочетания свойств variant с active',
        '<variant>_first': ' стили variant если кнопка первая в группе',
        '<variant>_last': 'стили variant если кнопка последняя в группе',
        '<variant>_middle': 'стили variant если кнопка в середине группы'
      }
    }
  }"
>
  <StructureBlock class='bg-blue-500' name='button' :width='180' :height='60'>
    Button
  </StructureBlock>
</StructureScheme>

### Свойства

| Свойство | Типы | default | Описание |
|---|---|---|---|
| `ref` | `HTMLButtonElement` | `null` | Референс на DOM элемент |
| `variant` | `primary, secondary, outlined, clean` | `primary` | Вариант отображения дизайна |
| `size` | `small, medium, large` | `medium` | Размер |
| `active` | `boolean` | `false` | Состояние кнопки в прожатом действующем состоянии |
| `disabled` | `boolean` | `false` | Состояние кнопки в отключённом, недоступном для нажатия состоянии |
| `groupKey` | `string, number, undefined` | `undefined` | Ключ кнопки, нужен при применении в группе, для автоматической установки активного состояния, если у группы есть свойство value |

### Слоты

| Слот | Scope | Описание |
|---|---|---|
| `default` | `no` | Базовый центральный слот |

### События

| Название | Аргументы | Описание |
|---|---|---|
| `onClick` | `MouseEvent` | Клик по кнопке, не исполнится если установлен disabled |

