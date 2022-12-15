import React from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import {Box} from "@mui/material";
import useAuth from "providers/AuthProvider/useAuth";
import useTrans from "../../../../core/hooks/useTrans";
import {Link, useNavigate} from "react-router-dom";

const AuthDropdownMenu = () => {

    const {logout} = useAuth();

    const {trans} = useTrans();

    const navigate = useNavigate();

    const gotoAccountSettings = () => {
        navigate("/user/account-settings");
    }

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <>
                            <Box
                                component="span"
                            >
                                {trans("users.accountSettings")}
                            </Box>
                        </>
                    ),
                    onClick: gotoAccountSettings
                },
                {
                    key: '2',
                    label: (
                        <>
                            <Box
                                component="span"
                            >
                                {trans("common.logout")}
                            </Box>
                        </>
                    ),
                    onClick: logout
                },
            ]}
        />
    );

    const preventDefault = (e: any) => {
        e.preventDefault()
    }

    return(
        <>
            <Dropdown overlay={menu}>
                <a onClick={preventDefault}>
                    <Space>
                        <SettingOutlined />
                    </Space>
                </a>
            </Dropdown>
        </>
    )
}

export default AuthDropdownMenu;
