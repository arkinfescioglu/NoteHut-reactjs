import React, {useCallback, useReducer} from 'react';
import {AuthContextActions, AuthContextReducer} from "./AuthContextReducer";
import jwt_decode from "jwt-decode";
import {AuthUser} from "../../types/Models/AuthUser";
import AuthContext from "./AuthContext";
import AuthContextState from "./AuthContextStates";

const AuthProvider: React.FC<any> = ({
    children
}) => {

    const [state, dispatch] = useReducer(
        AuthContextReducer,
        AuthContextState,
        () => AuthContextState,
    );

    const init = () => {
        const token = localStorage.getItem("token");
        if(!!token && (!state?.isLogin || !state?.token)) {
            login(token);
        }
    }

    const setToken = useCallback((token: string) => {
        localStorage.setItem("token", token);
        dispatch({
            type: AuthContextActions.SET_TOKEN,
            payload: token
        });
    }, [])

    const setIsLogin = useCallback((value: boolean) => {
        dispatch({
            type: AuthContextActions.SET_IS_LOGIN,
            payload: value
        });
    }, [])

    const login = useCallback((token: string) => {
        localStorage.setItem("token", token);
        dispatch({
            type: AuthContextActions.LOGIN,
            payload: token
        });
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem("token");
        dispatch({
            type: AuthContextActions.LOGOUT,
        });
    }, [])

    const getUser = useCallback((): AuthUser|null => {
        const token = state?.token;
        if (!!token) {
            return jwt_decode(token);
        }
        return null;
    }, [state?.token])

    return (
        <>
            <AuthContext.Provider
                value={{
                    ...state,
                    setToken,
                    setIsLogin,
                    login,
                    logout,
                    getUser,
                    init,
                }}
            >
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthProvider;
