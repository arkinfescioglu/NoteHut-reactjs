import React from 'react';

interface IProps {
    children: any;
}

const AuthPageWrapper:React.FC<IProps> = ({
    children
}) => {

    return(
        <>
            <div className="overflow-auto">
                <div className="container-xl container-lg container-md container-sm container-fluid">
                    <div className="row d-inline justify-content-center align-items-center">
                        <div className="col-md-9 col-sm-10 col-12 mx-auto my-auto">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AuthPageWrapper;
