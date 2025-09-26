import type { Component, ComputedRef, VNode } from 'vue';
import type { FormRules, FormItemProps } from 'element-plus';
import type { Compulsory } from '@bricklayer/utils/types';
export type TFormItem = Compulsory<Partial<FormItemProps>, 'label'> & {
    hidden?: boolean;
    span?: number;
    compType?: string | (() => VNode) | Component;
    compProps?: unknown;
};
type FuncComponentProps = {
    modelValue: any;
    rules: FormRules;
    items: TFormItem[] | ComputedRef<TFormItem[]>;
};
export declare const useBaForm: (props: FuncComponentProps) => {
    BaForm: (_: any, { slots }: any) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    validate: () => any;
    resetFields: () => any;
};
export {};
