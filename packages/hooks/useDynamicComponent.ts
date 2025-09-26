import {
  ElButton,
  ElDatePicker,
  ElInput,
  ElSelect,
  ElSwitch,
} from 'element-plus';
import { isString } from '@bricklayer/utils/tools';

const componentMap: Record<string, any> = {
  input: ElInput,
  button: ElButton,
  select: ElSelect,
  date: ElDatePicker,
  switch: ElSwitch,
};

type TComponentType = keyof typeof componentMap;

export function useDynamicComponent(initType?: TComponentType): {
  componentMap: Record<string, any>;
  getComponent: (type: unknown) => any;
} {
  const getComponent = (type: unknown) => {
    if (type && !isString(type)) {
      return type;
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
