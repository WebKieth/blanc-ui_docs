<script lang="ts" setup>
  const {name, info} = defineProps<{
    name: string
    info: Record<string, string | Record<string, string>>
  }>()
</script>
<template>
  <div class="flex flex-col gap-1 max-w-sm text-gray-900">
    <div class="text-base">{{ name }}</div>
    <div class="flex flex-col text-sm">
      <ul v-for="(data, key) in info">
        <li :key="key">
          <span class="font-medium">{{ key }}:</span>
          <template v-if="typeof data === 'string'">
            <span class="ml-3 text-gray-600">{{ data }}</span>
          </template>
          <template v-else>
            <ul v-for="(item, key) in data">
              <li :key="key">
                <span class="font-medium">{{ key }}:</span>
                <span class="ml-3 text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>