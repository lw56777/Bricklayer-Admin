type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type Compulsory<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type { Optional, Compulsory };
