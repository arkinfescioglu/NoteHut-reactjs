import useAntApi from "core/hooks/useAntApi";
import {ApiCallBack} from "types/GeneralTypes";
import {LoginOutDto} from "types/Dto/Outputs/LoginOutDto";
import {IApiResult} from "types/IApiResult";
import useAuth from "providers/AuthProvider/useAuth";
import {useNavigate} from "react-router-dom";
import {UserOutDto} from "types/Dto/Outputs/UserOutDto";

export default function useAuthService() {

    const {
        form,
        post,
    } = useAntApi();

    const {login} = useAuth();

    const navigate = useNavigate();

    const register = (
        callback: ApiCallBack<UserOutDto> | null = null
    ) => {
        post("users/store",
            (response: IApiResult) => {
                if (typeof callback === "function")
                    callback(response as any);
            });
    }

    const makeLogin = (
        callback: ApiCallBack<LoginOutDto> | null = null
    ) => {
        post("auth/login",
            (response: IApiResult) => {
                if (response.success && response.data) {
                    const data = response.data as LoginOutDto;
                    login(data?.token);
                }
                if (typeof callback === "function")
                    callback(response as any);
            });
    }

    return {
        form,
        makeLogin,
        register
    }
}
