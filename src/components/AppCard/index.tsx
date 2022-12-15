import React from 'react';
import { Card } from 'antd';

interface IProps {
    children: any;
    extra?: any;
    title?: string | null;
    bordered?: boolean;
}

const AppCard:React.FC<IProps> = ({
    children,
    title,
    bordered = true,
    extra = null
}) => {

    return(
        <>
            <Card
                title={title}
                bordered={bordered}
                extra={extra}
            >
                {children}
            </Card>
        </>
    )
}

export default AppCard;
