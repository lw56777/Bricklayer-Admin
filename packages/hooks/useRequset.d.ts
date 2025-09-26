import { type TPageProps } from './usePagination';
export type TService = (...args: any[]) => Promise<any> | Promise<any>[];
export interface IOptions {
    data?: any;
    immediate?: boolean;
    delay?: number;
    params?: any;
    pagination?: TPageProps;
}
export declare function useRequest(service: TService, options?: IOptions): {
    loading: import("vue").Ref<boolean, boolean>;
    params: import("vue").Ref<any, any>;
    data: import("vue").Ref<any, any>;
    error: import("vue").Ref<any, any>;
    run: () => void;
};
