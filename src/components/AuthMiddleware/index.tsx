import React, {useEffect, useState} from 'react';
import useAuth from "providers/AuthProvider/useAuth";
import Loader from "../Loader";

const AuthMiddleware:React.FC<any> = ({
    children
}) => {

    const {init} = useAuth();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        init();
        setLoading(false);
    }, []);

    return(
        <>
            {loading ? <Loader /> : (
                <>
                    {children}
                </>
            )}
        </>
    )
}

export default AuthMiddleware;
