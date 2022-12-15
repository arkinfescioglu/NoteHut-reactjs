import React from 'react';
import isEqual from "react-fast-compare";
import AuthDropdownMenu from "../AuthDropdownMenu";
import {Layout, theme} from "antd";

const { Header } = Layout;

interface IProps {
    isLogin: boolean
}

const AppLayoutHeader:React.FC<IProps> = ({
    isLogin = false
}) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return(
        <>
            {isLogin && (
                <>
                    <Header
                        style={{ padding: 0, background: colorBgContainer }}
                    >
                        <div className="float-end me-4">
                            <AuthDropdownMenu />
                        </div>
                    </Header>
                </>
            )}
        </>
    )
}

export default React.memo(AppLayoutHeader, (prev, next) => {
    return isEqual(prev.isLogin, next.isLogin);
})
