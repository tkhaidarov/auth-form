declare const rootReducer: import("redux").Reducer<{
    search: import("../slices/searchSlice").SearchState;
    auth: import("../types/types").IAuthState;
    authApi: import("@reduxjs/toolkit/query").CombinedState<{
        login: import("@reduxjs/toolkit/query").MutationDefinition<import("../types/types").ILoginRequest, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Profile", import("../types/types").IAuthResponse, "authApi">;
        register: import("@reduxjs/toolkit/query").MutationDefinition<import("../types/types").IRegisterRequest, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Profile", import("../types/types").IAuthResponse, "authApi">;
        getProfile: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Profile", import("../types/types").IUserProfile[], "authApi">;
    }, "Profile", "authApi">;
    usersApi: import("@reduxjs/toolkit/query").CombinedState<{
        getUsers: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Users", import("../types/types").IUserProfile[], "usersApi">;
        blockUser: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Users", void, "usersApi">;
        unBlockUser: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Users", void, "usersApi">;
        deleteUser: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Users", void, "usersApi">;
    }, "Users", "usersApi">;
    error: import("../slices/errorSlice").IErrorState;
    form: {
        name: string;
        email: string;
        password: string;
    };
}, import("redux").UnknownAction, Partial<{
    search: import("../slices/searchSlice").SearchState | undefined;
    auth: import("../types/types").IAuthState | undefined;
    authApi: import("@reduxjs/toolkit/query").CombinedState<{
        login: import("@reduxjs/toolkit/query").MutationDefinition<import("../types/types").ILoginRequest, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Profile", import("../types/types").IAuthResponse, "authApi">;
        register: import("@reduxjs/toolkit/query").MutationDefinition<import("../types/types").IRegisterRequest, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Profile", import("../types/types").IAuthResponse, "authApi">;
        getProfile: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Profile", import("../types/types").IUserProfile[], "authApi">;
    }, "Profile", "authApi"> | undefined;
    usersApi: import("@reduxjs/toolkit/query").CombinedState<{
        getUsers: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Users", import("../types/types").IUserProfile[], "usersApi">;
        blockUser: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Users", void, "usersApi">;
        unBlockUser: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Users", void, "usersApi">;
        deleteUser: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Users", void, "usersApi">;
    }, "Users", "usersApi"> | undefined;
    error: import("../slices/errorSlice").IErrorState | undefined;
    form: {
        name: string;
        email: string;
        password: string;
    } | undefined;
}>>;
export default rootReducer;
