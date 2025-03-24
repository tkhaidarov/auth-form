export interface IAuthState {
    user: {
        id: string;
        name: string;
        email: string;
    } | null;
    token: string | null;
}
export interface IAuthResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}
export interface ILoginRequest {
    email: string;
    password: string;
}
export interface IRegisterRequest {
    name: string;
    email: string;
    password: string;
}
export interface IUserProfile {
    id: string;
    name: string;
    email: string;
    is_blocked: boolean;
    last_seen: string;
}
export interface ISelectedUsers {
    selectedUsers: string[];
}
