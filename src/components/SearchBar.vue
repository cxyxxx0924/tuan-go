<template>
  <n-input placeholder="搜索">
    <template #prefix>
      <n-icon :component="FlashOutline" />
    </template>
  </n-input>
</template>

<script setup lang="ts">
import { FlashOutline } from "@vicons/ionicons5";
</script>
