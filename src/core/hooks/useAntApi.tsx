import { Form } from "antd";
import { IApiResult } from "types/IApiResult";
import useAntNoti from "./useAntNoti";
import useApi from "./useApi";
import {useState} from "react";

export default function useAntApi(init: IConfig = {
    showSuccess: true,
    resetForm: true,
}) {

    const [form] = Form.useForm();

    const [loading, setLoading] = useState<boolean>(false);

    const api = useApi();

    const notification = useAntNoti();

    const _checkResult = (res: IApiResult) => {

        if (res.isValidationError) {
            let values = form.getFieldsValue(true);
            form.setFieldsValue(values);
            console.log(res.validationMessages);
            form.setFields(res.validationMessages);
            return false;
        }
        return true;
    }

    const post = async (
        url: string,
        callback: AfterCallback = () => null,
        extraInput: any = null
    ) => {
        setLoading(true);
        let inputs: any = form.getFieldsValue(true);
        if (!!extraInput) {
            inputs = {
                ...inputs,
                ...extraInput
            }
        }
        await api.post(url, inputs, (res) => {
            if (_checkResult(res)) {
                if (init.resetForm) {
                    form.resetFields();
                }
                if (init.showSuccess) {
                    notification.success();
                }
            }
            callback(res);
        });
        setLoading(false);
    }

    const put = (
        url: string,
        callback: AfterCallback = () => null,
        extraInput: any = null
    ) => {
        setLoading(true);
        let inputs: any = form.getFieldsValue(true);
        if (!!extraInput) {
            inputs = {
                ...inputs,
                ...extraInput
            }
        }
        api.put(url, inputs, (res) => {
            if (_checkResult(res)) {
                if (init.resetForm) {
                    form.resetFields();
                }
                if (init.showSuccess) {
                    notification.success();
                }
            }
            callback(res);
        });
        setLoading(false);
    }

    return {
        form,
        post,
        put,
        loading
    }
}

type AfterCallback = (result: IApiResult) => void;

interface IConfig {
    showSuccess?: boolean;
    resetForm?: boolean;
}
