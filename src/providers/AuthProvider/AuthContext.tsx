import React from "react";
import {AuthUser} from "types/Models/AuthUser";
import AuthContextState from "./AuthContextStates";

export interface IAuthContext {
    isLogin: boolean;
    token: any;
    setToken: (token: string) => void;
    setIsLogin: (value: boolean) => void;
    login: (token: string) => void;
    logout: () => void;
    init: () => void;
    getUser: () => AuthUser|null;
}

export default React.createContext<IAuthContext>({
    ...AuthContextState,
    setToken: (token) => null,
    setIsLogin: (value) => null,
    login: (token) => null,
    logout: () => null,
    init: () => null,
    getUser: () => null,
});
