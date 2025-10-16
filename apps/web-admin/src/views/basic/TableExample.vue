<script setup lang="ts">
import { h, ref, computed, type ComputedRef } from 'vue';
import { ElTag, ElSwitch } from 'element-plus';
import type { TTableColumn } from '@bricklayer/components/BaTableColumn';
import AgeComp from '~/components/Age.vue';

const tableData = ref([
  {
    date: '2016-05-03',
    name: '远方os',
    gender: 0,
    age: 35,
    city: 3,
    course: 'Vue源码课',
    price: 699,
    state: '已白嫖',
  },
  {
    date: '2016-05-02',
    name: '近圆os',
    gender: 1,
    age: 45,
    city: 2,
    course: 'Vue源码课',
    price: 999,
    state: '已下单没付钱',
  },
  {
    date: '2016-05-04',
    name: '远万os',
    gender: 1,
    age: 55,
    city: 1,
    course: 'Vue源码课',
    price: 1398,
    state: '下了两单',
  },
  {
    date: '2016-05-01',
    name: '运芳os',
    gender: 0,
    age: 65,
    city: '',
    course: 'Vue源码课',
    price: 9999,
    state: '送小姐姐',
  },
]);

const columns: ComputedRef<TTableColumn[]> = computed(() => [
  // 普通列
  {
    prop: 'date',
    label: '时间',
    width: '110',
  },

  // 自定义列-插槽
  {
    prop: 'name',
    label: '姓名',
    width: '90',
    align: 'center',
  },

  // 自定义列-函数组件
  {
    prop: 'gender',
    label: '性别',
    width: '120',
    compType: ({ row }) =>
      h(ElSwitch, {
        modelValue: row.gender,
        activeText: '男',
        inactiveText: '女',
        activeValue: 1,
        inactiveValue: 0,
      }),
  },

  // 自定义列-组件对象
  {
    prop: 'age',
    label: '年龄',
    width: '180',
    compType: AgeComp,
  },

  // 自定义列-动态组件
  {
    prop: 'city',
    label: '城市',
    compType: 'select',
    compProps: {
      placeholder: '请选择城市',
      options: [
        { label: '北京', value: 1 },
        { label: '上海', value: 2 },
        { label: '杭州', value: 3 },
      ],
    },
  },

  // 多级表头
  {
    label: '订单详情',
    child: [
      {
        prop: 'course',
        label: '课程名称',
      },
      {
        label: '内容介绍',
        child: [
          {
            prop: 'price',
            label: '价格',
          },
          {
            prop: 'state',
            label: '状态',
          },
        ],
      },
    ],
  },

  // 多插槽（header和default）
  {
    prop: 'actions',
    label: '操作',
  },
]);
</script>

<template>
  <BaTable v-model="tableData" :columns="columns" border>
    <!-- 默认插槽 -->
    <template #name="{ row }">
      <el-tag type="success" size="large">{{ row.name }}</el-tag>
    </template>

    <!-- 多插槽 -->
    <template #actions-header="{ column, $index }">
      自定义表头: {{ column.label + $index }}
    </template>
    <template #actions="{ row }">
      <el-button @click="console.log(row)">查看</el-button>
    </template>
  </BaTable>
</template>
