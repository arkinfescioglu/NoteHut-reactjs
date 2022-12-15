import React, {useMemo} from 'react';
import { Layout } from 'antd';
import AppSidebar from "./components/AppSidebar";
import useAuth from "providers/AuthProvider/useAuth";
import AppBackdrop from "../AppBackdrop";
import NoteSpeedDial from "../NoteSpeedDial";
import GlobalModals from "./components/GlobalModals";
import AppLayoutHeader from "./components/AppLayoutHeader";

const { Content } = Layout;

interface IProps {
    children?: any;
}

const LayoutMain:React.FC<IProps> = ({
    children
}) => {

    const {isLogin} = useAuth();

    const getSidebar = useMemo(() => (
        <>
            {isLogin && (
                <>
                    <AppSidebar />
                </>
            )}
        </>
    ), [isLogin]);

    const getSpeedDials = useMemo(() => (
        <>
            {isLogin && (
                <>
                    <NoteSpeedDial />
                </>
            )}
        </>
    ), [isLogin]);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {getSidebar}
            <Layout className="site-layout">
                <AppLayoutHeader isLogin={isLogin} />
                <Content style={{ margin: '0 16px' }}>
                    <div style={{ padding: 24, minHeight: 360, marginTop:25 }}>
                        <AppBackdrop />
                        {children}
                        <GlobalModals
                            isLogin={isLogin}
                        />
                        {getSpeedDials}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default LayoutMain;
