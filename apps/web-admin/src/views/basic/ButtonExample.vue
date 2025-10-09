<script setup lang="ts">
const onClick = async () => {
  console.log('onClick');
  return new Promise(resolve => setTimeout(resolve, 1000));
};
</script>

<template>
  <div>
    <BaButton @click="onClick">Default</BaButton>
    <BaButton type="primary" @click="onClick">Primary</BaButton>
    <BaButton type="success" @click="onClick">Success</BaButton>
    <BaButton type="info" @click="onClick">Info</BaButton>
    <BaButton type="warning" @click="onClick">Warning</BaButton>
    <BaButton type="danger" @click="onClick">Danger</BaButton>
  </div>
</template>
