import type { VNode, Component } from 'vue';
import type { DialogProps, ButtonProps } from 'element-plus';
export type TDialogProps = Partial<DialogProps> & {
    footer?: (() => VNode) | (() => VNode[]) | Component;
};
type TFooterBtnProps = Partial<ButtonProps> & {
    name?: string;
    hidden?: boolean;
    click?: string | ((...args: any[]) => void);
};
export declare function useBaDialog(componet: Component | (() => VNode) | string, props: Record<string, any>, DialogProps: TDialogProps): {
    instnce: import("vue").Ref<any, any>;
    close: () => void;
    createConfirm: (props?: string | TFooterBtnProps) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    createCancel: (name?: string, props?: Partial<ButtonProps>) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
};
export {};
