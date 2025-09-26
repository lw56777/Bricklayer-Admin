export declare function isObject(val: any): boolean;
export declare function hasChanged(newValue: any, oldValue: any): boolean;
export declare function isFunction(val: any): boolean;
export declare function isOn(key: string): boolean;
export declare const isArray: (arg: any) => arg is any[];
export declare function isString(value: any): value is string;
export declare function isNumber(value: any): value is number;
export declare function getLocalStorage(key: string): any;
export declare function getRandomInt(min: number, max: number): number;
export declare function arrayToStrategy(arr: any[], labelKey: string | Function, valueKey: string | Function): {
    [key: string]: any;
};
export declare function shuffleArray(arr: any[]): any[];
export declare function hexToRgba(hex: string, alpha?: number): string;
export declare function isEqualArray(arr1: any[], arr2: any[]): boolean;
export declare function getTextWidth(content: string, fontSize: number): number;
