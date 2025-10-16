import {
  ElButton,
  ElInput,
  ElCascader,
  ElCheckbox,
  ElDatePicker,
  ElRadio,
  ElSelect,
  ElSwitch,
} from 'element-plus';
import { isString, isFunction } from '@bricklayer/utils/tools';

const componentMap: Record<string, any> = {
  button: ElButton,
  input: ElInput,
  cascader: ElCascader,
  checkbox: ElCheckbox,
  date: ElDatePicker,
  radio: ElRadio,
  select: ElSelect,
  switch: ElSwitch,
};

type TComponentType = keyof typeof componentMap;

export function useDynamicComponent(initType?: TComponentType): {
  componentMap: Record<string, any>;
  getComponent: (type: unknown, scope?: any) => any;
} {
  const getComponent = (type: unknown, scope?: any) => {
    if (type && !isString(type)) {
      return isFunction(type) ? (type as Function)(scope) : type;
    }

    return componentMap[
      (type as TComponentType) || (initType as TComponentType)
    ];
  };

  return {
    componentMap,
    getComponent,
  };
}
