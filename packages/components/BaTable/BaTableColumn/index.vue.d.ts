import type { PropType } from 'vue';
import type { TTableColumn } from '.';
declare var __VLS_12: string, __VLS_13: {
    row: any;
    $index: any;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_12>]?: (props: typeof __VLS_13) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<TTableColumn[]>;
        default: () => any[];
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: PropType<TTableColumn[]>;
        default: () => any[];
    };
}>> & Readonly<{}>, {
    columns: TTableColumn[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
