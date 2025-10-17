import type { Component, VNode } from 'vue';
import type { TableColumnCtx } from 'element-plus';
import type { Compulsory } from '@bricklayer/utils/types';

export type TTableColumn = Compulsory<Partial<TableColumnCtx>, 'label'> & {
  hidden?: boolean;
  compType?: string | (() => VNode) | Component; // 动态组件类型
  compProps?: unknown; // 动态组件的属性
  child?: TTableColumn[];
  header?: string | (() => VNode) | Component; // 自定义表头
};
