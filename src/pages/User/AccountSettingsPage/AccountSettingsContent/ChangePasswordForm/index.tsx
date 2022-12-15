import React from "react";
import useAntApi from "core/hooks/useAntApi";
import {Form, Skeleton} from "antd";
import InputWithLabel from "components/Form/InputWithLabel";
import useTrans from "core/hooks/useTrans";
import SuccessButton from "components/Form/Buttons/SuccessButton";

const ChangePasswordForm = () => {

    const {trans} = useTrans();

    const antApi = useAntApi({
        resetForm: true,
        showSuccess: true
    });

    const {form, loading} = antApi;

    const handleSubmit = () => {
        antApi.put("users/updatePassword", (response) => {
            if(response.success) {

            }
        });
    }

    return(
        <>
            <Form form={form}>
                <Skeleton active loading={loading}>
                    <InputWithLabel
                        name="oldPassword"
                        text={trans("common.oldPassword")}
                        type="password"
                    />
                    <InputWithLabel
                        name="password"
                        text={trans("common.password")}
                        type="password"
                    />
                    <InputWithLabel
                        name="passwordConfirmation"
                        text={trans("common.passwordConfirmation")}
                        type="password"
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

export default React.memo(ChangePasswordForm);
