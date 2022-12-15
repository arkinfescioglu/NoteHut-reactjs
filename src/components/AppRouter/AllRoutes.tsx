import React from 'react';

interface IProps {
    Component: any;
}

const AllRoutes: React.FC<IProps> = ({
    Component
}) => {

    return (
        <>
            <Component />
        </>
    )
}
export default AllRoutes;
