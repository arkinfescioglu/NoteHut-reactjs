import React from 'react';
import useAuth from "../../providers/AuthProvider/useAuth";
import {Navigate, useLocation} from 'react-router-dom';

interface IProps {
    Component: any;
}

const AuthRoutes: React.FC<IProps> = ({
    Component
}) => {

    const {isLogin} = useAuth();

    const location = useLocation();

    if (!isLogin) {
        return <Navigate to="/login" replace state={{from: location}}/>;
    }

    return (
        <>
            <Component />
        </>
    )
}
export default AuthRoutes;
