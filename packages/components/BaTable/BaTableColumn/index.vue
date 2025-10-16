<script setup lang="ts">
import { useSlots, computed, type PropType } from 'vue';
import { ElTableColumn as ElColumn } from 'element-plus';
import { useDynamicComponent } from '@bricklayer/hooks/useDynamicComponent';
import BaTableColumn from './index.vue';
import type { TTableColumn } from '.';

defineOptions({
  name: 'ElTableColumn',
});

const props = defineProps({
  columns: {
    type: Array as PropType<TTableColumn[]>,
    default: () => [],
  },
});

const columns = computed(() => {
  return props.columns.filter(column => !column.hidden);
});

const slots = useSlots();
const slotKeys = Object.keys(slots);
const slotHeaderSuffix = '-header';

function isHeaderSlot(slot: string): boolean {
  return slot.endsWith(slotHeaderSuffix);
}

const headerSlots = computed(() => {
  return slotKeys.filter(isHeaderSlot);
});

const defaultSlots = computed(() => {
  return slotKeys.filter(slot => !isHeaderSlot(slot));
});

const { getComponent } = useDynamicComponent();
</script>

<template>
  <ElColumn
    v-for="column in columns"
    :key="column.prop || column.label"
    v-bind="column"
  >
    <!-- 如果有子列 -->
    <BaTableColumn v-if="column.child" :columns="column.child" />

    <!-- 自定义表头 -->
    <template
      v-if="headerSlots.includes(`${column.prop}${slotHeaderSuffix}`)"
      #header="scope"
    >
      <slot :name="`${column.prop}${slotHeaderSuffix}`" v-bind="scope"></slot>
    </template>

    <!-- 自定义内容 -->
    <template
      v-if="column.compType || defaultSlots.includes(column.prop!)"
      #default="scope"
    >
      <slot :name="column.prop" v-bind="scope">
        <component
          :is="getComponent(column.compType, scope)"
          v-model="scope.row[column.prop as typeof scope.row]"
          v-bind="(column.compProps as Record<string, any>) || {}"
        />
      </slot>
    </template>
  </ElColumn>
</template>
