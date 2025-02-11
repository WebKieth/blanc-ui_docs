<script setup>
import RiGitRepCommits from './riGitRepCommits.vue';
import RiInstanceLine from './riInstanceLine.vue';
import RiQuillPenLine from './riQuillPenLine.vue';
import RiStackLine from './riStackLine.vue';

const icons = {
  'ri-git-rep-commits-line': RiGitRepCommits,
  'ri-instance-line': RiInstanceLine,
  'ri-stack-line': RiStackLine,
  'ri-quill-pen-line': RiQuillPenLine
}
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    default: 24
  },
  height: {
    type: Number,
    default: 24
  }
})
const Icon = icons[props.name]
</script>
<template>
  <Icon :width="props.width" :height="props.height" />
</template>