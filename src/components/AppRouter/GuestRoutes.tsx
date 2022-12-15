import React from 'react';
import {view} from '@risingstack/react-easy-state';
import useAuth from "../../providers/AuthProvider/useAuth";
import {Navigate} from "react-router-dom";

interface IProps {
    Component: any;
}

const GuestRoutes: React.FC<IProps> = ({
    Component
}) => {

    const {isLogin} = useAuth();

    if (isLogin) {
        return <Navigate to="/"/>;
    }

    return (
        <>
            <Component />
        </>
    )
}
export default view(GuestRoutes);
