
export interface IApiResult<TData = null> {
    success: boolean;
    message: any;
    status: any;
    data: TData | null;
    isValidationError: boolean;
    validationMessages: any;
    isAuthError: boolean;
}
