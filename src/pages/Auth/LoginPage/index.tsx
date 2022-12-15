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

const LoginPage = () => {

    const {
        form,
        makeLogin
    } = useAuthService();

    const {trans} = useTrans()

    const navigate = useNavigate();

    const handleSubmit = () => {
        makeLogin((res) => {
            if(res.success) {
                navigate("/");
            }
        });
    }

    const gotoRegister = () => {
        navigate("/register");
    }

    return(
        <>
            <AuthPageWrapper>
                <AppCard
                    title={trans("common.login")}
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
                        <SuccessButton
                            text={trans("common.login")}
                            onClick={handleSubmit}
                        />
                        <LightButton
                            text={trans("common.signup")}
                            className="w-100 mt-3"
                            onClick={gotoRegister}
                        />
                    </Form>
                </AppCard>
            </AuthPageWrapper>
        </>
    )
}

export default LoginPage;
