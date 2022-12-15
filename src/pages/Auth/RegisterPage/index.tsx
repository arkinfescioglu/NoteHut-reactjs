import React from 'react';
import useAuthService from "hooks/api/useAuthService";
import {Form} from "antd";
import InputWithLabel from 'components/Form/InputWithLabel';
import useTrans from "core/hooks/useTrans";
import AppCard from "components/AppCard";
import AuthPageWrapper from "../AuthPageWrapper";
import SuccessButton from "components/Form/Buttons/SuccessButton";
import LightButton from "components/Form/Buttons/LightButton";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {

    const {
        form,
        register
    } = useAuthService();

    const {trans} = useTrans()

    const navigate = useNavigate();

    const handleSubmit = () => {
        register((res) => {
            if(res.success) {
                gotoLogin();
            }
        })
    }

    const gotoLogin = () => {
        navigate("/login")
    }

    return(
        <>
            <AuthPageWrapper>
                <AppCard
                    title={trans("common.signup")}
                >
                    <Form form={form}>
                        <InputWithLabel
                            name="email"
                            text={trans("common.email")}
                            type="email"
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
                        <InputWithLabel
                            name="name"
                            text={trans("common.name")}
                        />
                        <InputWithLabel
                            name="lastname"
                            text={trans("common.lastname")}
                        />
                        <SuccessButton
                            text={trans("common.signup")}
                            onClick={handleSubmit}
                        />
                        <LightButton
                            text={trans("common.login")}
                            className="w-100 mt-3"
                            onClick={gotoLogin}
                        />
                    </Form>
                </AppCard>
            </AuthPageWrapper>
        </>
    )
}

export default RegisterPage;
