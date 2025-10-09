<script setup lang="ts">
import { ref, useAttrs } from 'vue';
import { omit } from 'lodash-es';
import { isFunction } from '@bricklayer/utils/tools';

defineOptions({
  name: 'BaButton',
  inheritAttrs: false,
});

const loading = ref(false);

const attrs = useAttrs();
const onClick = async () => {
  try {
    loading.value = true;

    if (isFunction(attrs.onClick)) {
      await (attrs.onClick as Function)();
    }
  } catch (error) {
    throw error;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <el-button
    :loading="loading"
    v-bind="omit(attrs, 'onClick')"
    @click="onClick"
  >
    <slot />
  </el-button>
</template>
