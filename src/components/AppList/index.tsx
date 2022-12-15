import React from "react";
import { Empty } from 'antd';

interface IProps {
    data: any[];
    renderRow: any;
    rowKey?: any;
}

const AppList:React.FC<IProps> = ({
    data,
    renderRow,
    rowKey = "id"
}) => {

    const renderMap = (item: any, index: number) => {
        if(typeof renderRow === "function") {
            return renderRow(item, index);
        }
    }

    if(!data?.length) {
        return <Empty />;
    }

    return (
        <>
            {data.map((item, index) => (
                <React.Fragment key={`appList--${index}--${item?.[rowKey]}`}>
                    {renderMap(item, index)}
                </React.Fragment>
            ))}
        </>
    )
}

export default AppList;
