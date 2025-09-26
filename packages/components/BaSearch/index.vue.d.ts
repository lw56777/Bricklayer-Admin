import { type PropType } from 'vue';
import type { FormRules } from 'element-plus';
import type { TFormItem } from '../BaForm';
import type { TEmitsAttrs } from '.';
declare var __VLS_16: import("element-plus").FormItemProp, __VLS_17: {}, __VLS_30: string, __VLS_31: {}, __VLS_34: string, __VLS_35: {};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_16>]?: (props: typeof __VLS_17) => any;
} & {
    [K in NonNullable<typeof __VLS_30>]?: (props: typeof __VLS_31) => any;
} & {
    [K in NonNullable<typeof __VLS_34>]?: (props: typeof __VLS_35) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    rules: {
        type: PropType<FormRules>;
        default: () => void;
    };
    items: {
        type: PropType<TFormItem[]>;
        default: () => any[];
    };
    emits: {
        type: PropType<TEmitsAttrs[]>;
        default: () => any[];
    };
    modelValue: {
        type: PropType<any>;
    };
}>, {
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        readonly footer: string;
        readonly header: string;
        readonly bodyStyle: import("vue").StyleValue;
        readonly shadow: "always" | "never" | "hover";
    }> & Omit<{
        readonly footer: string;
        readonly header: string;
        readonly bodyStyle: import("vue").StyleValue;
        readonly headerClass?: string;
        readonly bodyClass?: string;
        readonly footerClass?: string;
        readonly shadow?: "always" | "never" | "hover";
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "footer" | "header" | "bodyStyle" | "shadow">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    $root: import("vue").ComponentPublicInstance | null;
    $parent: import("vue").ComponentPublicInstance | null;
    $host: Element | null;
    $emit: (event: string, ...args: any[]) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        readonly header: {
            readonly type: PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        } & {
            readonly default: "";
        };
        readonly footer: {
            readonly type: PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        } & {
            readonly default: "";
        };
        readonly bodyStyle: {
            readonly type: PropType<import("vue").StyleValue>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        } & {
            readonly default: "";
        };
        readonly headerClass: StringConstructor;
        readonly bodyClass: StringConstructor;
        readonly footerClass: StringConstructor;
        readonly shadow: {
            readonly type: PropType<"always" | "never" | "hover">;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        } & {
            readonly default: undefined;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        readonly footer: string;
        readonly header: string;
        readonly bodyStyle: import("vue").StyleValue;
        readonly shadow: "always" | "never" | "hover";
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: (() => void) | (() => void)[];
        created?: (() => void) | (() => void)[];
        beforeMount?: (() => void) | (() => void)[];
        mounted?: (() => void) | (() => void)[];
        beforeUpdate?: (() => void) | (() => void)[];
        updated?: (() => void) | (() => void)[];
        activated?: (() => void) | (() => void)[];
        deactivated?: (() => void) | (() => void)[];
        beforeDestroy?: (() => void) | (() => void)[];
        beforeUnmount?: (() => void) | (() => void)[];
        destroyed?: (() => void) | (() => void)[];
        unmounted?: (() => void) | (() => void)[];
        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
} & Readonly<{
    readonly footer: string;
    readonly header: string;
    readonly bodyStyle: import("vue").StyleValue;
    readonly shadow: "always" | "never" | "hover";
}> & Omit<Readonly<import("vue").ExtractPropTypes<{
    readonly header: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    readonly footer: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    readonly bodyStyle: {
        readonly type: PropType<import("vue").StyleValue>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: "";
    };
    readonly headerClass: StringConstructor;
    readonly bodyClass: StringConstructor;
    readonly footerClass: StringConstructor;
    readonly shadow: {
        readonly type: PropType<"always" | "never" | "hover">;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    } & {
        readonly default: undefined;
    };
}>>, "footer" | "header" | "bodyStyle" | "shadow"> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {} & {
    $slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    search: () => void;
    reset: () => void;
    refresh: () => void;
    "update:modelValue": (value: any) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    rules: {
        type: PropType<FormRules>;
        default: () => void;
    };
    items: {
        type: PropType<TFormItem[]>;
        default: () => any[];
    };
    emits: {
        type: PropType<TEmitsAttrs[]>;
        default: () => any[];
    };
    modelValue: {
        type: PropType<any>;
    };
}>> & Readonly<{
    onSearch?: () => any;
    onReset?: () => any;
    "onUpdate:modelValue"?: (value: any) => any;
    onRefresh?: () => any;
}>, {
    emits: TEmitsAttrs[];
    rules: Partial<Record<string, import("element-plus").FormItemRule | import("element-plus").FormItemRule[]>>;
    items: TFormItem[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
