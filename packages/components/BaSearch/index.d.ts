import { type Component, type ComponentInstance, type VNode } from 'vue';
import { ElButton, ElCard } from 'element-plus';
export type TProps = ComponentInstance<typeof ElCard>;
export type TEmitsAttrs = Partial<ComponentInstance<typeof ElButton>> & {
    name?: string | (() => VNode) | Component;
    prop?: string;
    hidden?: boolean;
    nativeType?: string;
    compType?: string | (() => VNode) | Component;
    onClick?: Function;
    onChange?: Function;
};
export type TEmits = {
    search: () => void;
    reset: () => void;
    refresh: () => void;
};
