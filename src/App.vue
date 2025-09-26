<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn';
</script>

<template>
  <div class="app">
    <ElConfigProvider :locale="zhCn">
      <RouterView />
    </ElConfigProvider>
    <Background />
  </div>
</template>
