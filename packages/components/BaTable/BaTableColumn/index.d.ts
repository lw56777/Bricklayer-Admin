import type { Component, VNode } from 'vue';
import type { TableColumnCtx } from 'element-plus';
import type { Compulsory } from '@bricklayer/utils/types';
export type TTableColumn = Compulsory<Partial<TableColumnCtx>, 'label'> & {
    hidden?: boolean;
    compType?: string | (() => VNode) | Component;
    compProps?: unknown;
    child?: TTableColumn[];
};
