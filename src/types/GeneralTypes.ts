import { ApiPaginateResult } from "./ApiPaginateResult";
import { IApiResult } from "./IApiResult";

export type ApiCallBack<TData = null> = (response: IApiResult<TData>) => any;

export type ApiPaginateCallBack<TData = null> = (response: ApiPaginateResult<TData>) => any;
