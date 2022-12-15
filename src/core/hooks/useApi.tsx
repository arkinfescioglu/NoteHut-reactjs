import {useMemo, useState} from "react";
import {ApiCallBack, ApiPaginateCallBack} from "types/GeneralTypes";
import axios from "axios";
import {IApiResult} from "types/IApiResult";
import useAntNoti from "./useAntNoti";
import useTrans from "./useTrans";
import useApp from "providers/AppProvider/useApp";
import {ApiConfigs} from "shared/config/ApiConfigs";

export default function useApi(init?: {
    onResult?: (res: any) => void,
    onError?: (res: any) => void,
    mainConfig?: any;
}) {

    const CONFIG = useMemo(() => ({
        baseURL: ApiConfigs.BASE_URL, // YOUR_API_URL HERE
        headers: {
            "Content-Type": "application/json",
        },
    }), []);

    const {setLoading} = useApp();

    const [started, setStarted] = useState(false);

    const noti = useAntNoti();

    const {trans} = useTrans();

    const apiRequest = () => {
        const client = axios.create(CONFIG);
        client.interceptors.request.use(
            (res: any) => {
                let token = localStorage.getItem('token');
                if (!!token) {
                    res.headers["Authorization"] = "Bearer " + token;
                }
                return res;
            }
        )
        client.interceptors.response.use(
            (res) => {
                let data: IApiResult = res.data as IApiResult;

                if (!data.success && !data.isValidationError) {
                    noti.error(data?.message ?? trans("error.main"));
                    return Promise.reject(res);
                }

                if (!!init?.onResult && typeof init?.onResult === "function") {
                    return init?.onResult?.(res);
                }
                return res.data;
            },
            (err) => {
                if (err.response && err.response.data.msg === "Token is not valid") {
                    console.log("Need to logout user");
                    // store.dispatch({type: LOGOUT});
                }

                if (!!init?.onError && typeof init?.onError === "function") {
                    return init?.onError?.(err);
                }
                return err;
            }
        );
        return client;
    }

    const _checkResponse = (res: any) => {
        let result = res?.data as IApiResult;

        return res;
    }

    const startRequest = () => {
        setLoading(true);
        setStarted(true);
    }

    const endRequest = () => {
        setLoading(false);
        setStarted(false);
    }

    async function get<TData = null>(
        url: string,
        params: any = null,
        callback: ApiCallBack<TData>,
        error: ApiCallBack | null = () => null,
        finnaly: () => void = () => null,
    ) {
        startRequest();
        await apiRequest()
            .get(url, {
                params: params
            }).then(response => {
                if (!!callback && typeof callback === "function")
                    return callback(response as any);
            }).catch(e => {
                if (!!error && typeof error === "function")
                    error(e);
            }).finally(() => {
                endRequest();
                if (!!finnaly && typeof finnaly === "function")
                    finnaly();
            });
    }

    async function getPaginate<TData = null>(
        url: string,
        params: any = null,
        callback: ApiPaginateCallBack<TData>,
        error: ApiCallBack | null = () => null,
        finnaly: () => void = () => null,
    ) {
        startRequest();
        await apiRequest()
            .get(url, {
                params: params
            }).then(response => {
                if (!!callback && typeof callback === "function")
                    return callback(response as any);
            }).catch(e => {
                if (!!error && typeof error === "function")
                    error(e);
            }).finally(() => {
                endRequest();
                if (!!finnaly && typeof finnaly === "function")
                    finnaly();
            });
    }

    const post = async (
        url: string,
        data: any,
        callback: ApiCallBack<null>,
        error: any = () => null,
        finnaly: () => void = () => null,
    ) => {
        startRequest();
        await apiRequest()
            .post(url, data)
            .then(response => {
                if (!!callback && typeof callback === "function")
                    return callback(response as any);
            }).catch(e => {
                if (!!error && typeof error === "function")
                    error(e);
            })
            .finally(() => {
                endRequest();
                if (!!finnaly && typeof finnaly === "function")
                    finnaly();
            });
    }

    function put<TDATA = null>(
        url: string,
        data: any,
        callback: ApiCallBack<TDATA>,
        finnaly: () => void = () => null,
        error: ApiCallBack = () => null,
    ) {
        startRequest();
        apiRequest().put(url, data)
            .then(response => {
                if (!!callback && typeof callback === "function")
                    return callback(response as any);
            }).catch(e => error(e))
            .finally(() => {
                endRequest();
                finnaly();
            });
    }

    function deleteReq(
        url: string,
        params: any = null,
        callback: ApiCallBack,
        finnaly: () => void = () => null,
        error: ApiCallBack = () => null,
    ) {
        startRequest();
        apiRequest().delete(url, {
            params: params
        }).then(response => {
            if (!!callback && typeof callback === "function")
                return callback(response as any);
        }).catch(e => {
            error(e);
        }).finally(() => {
            endRequest();
            finnaly();
        });
    }

    return {
        started,
        get,
        getPaginate,
        post,
        put,
        deleteReq
    }
}
