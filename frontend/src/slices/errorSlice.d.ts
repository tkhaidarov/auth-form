export interface IErrorState {
    user: any | null;
    token: string | null;
    error: string | null;
}
export declare const setErrorCredentials: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    user: any;
    token: string;
}, "error/setErrorCredentials">, setError: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | null, "error/setError">;
declare const _default: import("redux").Reducer<IErrorState>;
export default _default;
