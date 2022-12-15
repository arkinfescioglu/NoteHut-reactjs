import React, {useEffect} from "react";
import useApi from "core/hooks/useApi";
import useAntApi from "core/hooks/useAntApi";
import {Form, Skeleton} from "antd";
import InputWithLabel from "components/Form/InputWithLabel";
import useTrans from "core/hooks/useTrans";
import SuccessButton from "components/Form/Buttons/SuccessButton";

const UpdateAccountForm = () => {

    const {trans} = useTrans();

    const {get, started} = useApi();

    const antApi = useAntApi({
        resetForm: false,
        showSuccess: true
    });

    const {form, loading} = antApi;

    useEffect(() => {
        getAuthUser();
    }, []);

    const getAuthUser = () => {
        get("auth/getAuthUser", null, (response) => {
            if(response.success && response.data) {
                form.setFieldsValue(response.data);
            }
        });
    }

    const handleSubmit = () => {
        antApi.put("users/update", (response) => {
            if(response.success) {

            }
        });
    }

    return(
        <>
            <Form form={form}>
                <Skeleton active loading={started}>
                    <InputWithLabel
                        name="email"
                        text={trans("common.email")}
                        type="email"
                    />
                    <InputWithLabel
                        name="name"
                        text={trans("common.name")}
                    />
                    <InputWithLabel
                        name="lastname"
                        text={trans("common.lastname")}
                    />
                    <SuccessButton
                        loading={loading}
                        text={trans("common.save")}
                        onClick={handleSubmit}
                    />
                </Skeleton>
            </Form>
        </>
    )
}

export default React.memo(UpdateAccountForm);
