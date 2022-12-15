import React, {useCallback, useEffect, useMemo} from 'react';
import {Layout, Menu} from "antd";
import {DesktopOutlined, FileOutlined} from "@ant-design/icons";
import useApp from "providers/AppProvider/useApp";
import useTrans from "core/hooks/useTrans";
import {useLocation, useNavigate} from "react-router-dom";
import SidebarLogo from "./SidebarLogo";

const {Sider} = Layout;

const AppSidebar = () => {

    const {
        navCollapsed,
        setNavCollapsed,
    } = useApp();

    const navigate = useNavigate();

    const {pathname} = useLocation();

    const {trans} = useTrans();

    const handleWindowSizeChange = () => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            setNavCollapsed(true);
        } else {
            setNavCollapsed(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const handleClick = useCallback((e: any) => {
        return navigate(e.key);
    }, []);

    const getSelectedTab = useMemo(
        () => pathname,
        [pathname]
    );

    return (
        <>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                collapsible
                collapsed={navCollapsed}
                onCollapse={setNavCollapsed}
            >
                <SidebarLogo />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={[getSelectedTab]}
                    selectedKeys={[getSelectedTab]}
                    mode="inline"
                >
                    <Menu.Item
                        key="/"
                        icon={<DesktopOutlined/>}
                        onClick={handleClick}
                    >
                        {trans("dashboard.text")}
                    </Menu.Item>
                    <Menu.Item
                        key="/notes/list"
                        icon={<FileOutlined/>}
                        onClick={handleClick}
                    >
                        {trans("notes.title")}
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    )
}


export default AppSidebar
