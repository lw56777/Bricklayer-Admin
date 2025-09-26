import type { PropType } from 'vue';
import type { FormRules } from 'element-plus';
import type { TFormItem } from '.';
declare var __VLS_24: import("node_modules/element-plus/es").FormItemProp, __VLS_25: {};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_24>]?: (props: typeof __VLS_25) => any;
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
    modelValue: {
        type: PropType<any>;
    };
}>, {
    validate: () => import("node_modules/element-plus/es").FormValidationResult;
    resetFields: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    rules: {
        type: PropType<FormRules>;
        default: () => void;
    };
    items: {
        type: PropType<TFormItem[]>;
        default: () => any[];
    };
    modelValue: {
        type: PropType<any>;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (value: any) => any;
}>, {
    rules: Partial<Record<string, import("node_modules/element-plus/es").FormItemRule | import("node_modules/element-plus/es").FormItemRule[]>>;
    items: TFormItem[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
