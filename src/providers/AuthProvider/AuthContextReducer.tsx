
export const AuthContextActions = {
    SET_TOKEN: "SET_TOKEN",
    SET_IS_LOGIN: "SET_IS_LOGIN",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
}

export function AuthContextReducer(
    state: any,
    action: any
) {

    switch (action.type) {

        case AuthContextActions.SET_TOKEN: {
            return {
                ...state,
                token: action.payload
            }
        }

        case AuthContextActions.SET_IS_LOGIN: {
            return {
                ...state,
                isLogin: action.payload
            }
        }

        case AuthContextActions.LOGIN: {
            return {
                ...state,
                isLogin: true,
                token: action.payload
            }
        }

        case AuthContextActions.LOGOUT: {

            return {
                ...state,
                isLogin: false,
                token: null
            }
        }

        default:
            return state;
    }

}
