<template>
  <div class="intro-container">
    <div class="typed-container py-20"><h1 id="typed"></h1></div>
    <h3 class="subtitle">Модульный набор плагинов и компонентов<br /> для удобной разработки интерфейсов на Vue и React</h3>
    <div class="pb-20 text-lg">
      <p class="pb-4">Устали от переопределения стилей базовых компонентов<br /> и топорности высокоуровневых UI библиотек?</p>
      <p><code>npm install blanc-ui@latest</code></p>
    </div>
    <div class="features">
      <div class="features__item" v-for="feature in features">
        <div class="feature" :key="feature.title">
          <Icon :name="feature.icon" :width="48" :height="48" />
          <h4 class="feature__title">{{ feature.title }}</h4>
          <p>{{ feature.summary }}</p>
        </div>
      </div>
    </div>
    <div class="epilogue">
      <span>Документация в активной разработке и в ближайшее время будет доступна только на моём родном русском языке!</span>
      <span>Есть вопросы? <a href="https://t.me/null_is_also_value" target="_blank" rel="noopener noreferrer">Пишите мне в telegram</a></span>
      <span>Release Notes так же ведутся в отдельном <a href="https://t.me/blanc_ui_release_notes" target="_blank" rel="noopener noreferrer">Telegram канале</a></span>
    </div>

  </div>
</template>
<script setup>
import Typed from 'typed.js';
import { onMounted } from 'vue';
import Icon from './icons/Icon.vue';
onMounted(() => {
  new Typed('#typed', {
    strings: ['Ant Des', '', 'Blya', 'Blanc UI'],
    typeSpeed: 200,
    cursorChar: '_'
  })
})
const features = [
  {
    icon: 'ri-instance-line',
    title: 'Самобытный',
    summary: 'Все модули реализованы самостоятельно. В клиентские зависимости допущены только низкоуровневые утилиты, а значит если нужно кастомизировать логику - сделайте форк и вы сможете кастомизировать всё.'
  },{
    icon: 'ri-quill-pen-line',
    title: 'Абстрактный',
    summary: 'Из коробки содержит минимум стилей, необходимых для отображения компонента. Все стили наследуются компонентами через переопределяемые свойства. Их отображение можно подстраивать под любой дизайн.'
  }, {
    icon: 'ri-git-rep-commits-line',
    title: 'Масштабируемый',
    summary: 'Содержит только низкоуровневые компоненты с базовой логикой. Рендер под Vue и React написан на jsx и предельно идентичен. Насколько это было, конечно, возможно.'
  },  {
    icon: 'ri-stack-line',
    title: 'Полностью типизированный',
    summary: 'Все модули проекта покрыты типами. В типизации не использованы жёсткие связи и наследования. Все типы модулей самобытны, это позволяет избежать лишних проблем при их расширении.'
  }
]
</script>
<style lang="scss">
.vp-navbar {
  backdrop-filter: blur(2px);
}
.intro-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
  .subtitle {
    font-size: 24px;
    margin-bottom: 24px;
  }
}
.typed-container {
  display: flex;
  align-items: center;
  min-height: 120px;
}
.typed-cursor {
  font-size: 48px;
}
#typed {
  font-family: 'Handjet', serif;
  font-weight: 300;
  padding: 0;
  margin: 0;
  font-size: 76px;
}
.features {
  display: flex;
  flex-wrap: wrap;
  row-gap: 36px;
  &__item {
    width: calc(50% - 24px);
    padding-left: 12px;
    padding-right: 12px;
  }
}
.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  & &__title {
    margin-top: 0;
    padding-top: 0;
  }
}
.epilogue {
  font-size: 20px;
  font-weight: 600;
  padding: 24px 0;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>