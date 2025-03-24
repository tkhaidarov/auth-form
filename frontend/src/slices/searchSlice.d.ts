export interface SearchState {
    searchEmail: string;
}
export declare const setSearchEmail: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "search/setSearchEmail">;
declare const _default: import("redux").Reducer<SearchState>;
export default _default;
