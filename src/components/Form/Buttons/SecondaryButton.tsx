import React from 'react';
import Button from 'react-bootstrap/Button';
import isEqual from "react-fast-compare";
import {Spin} from "antd";

interface IProps {
    text: string;
    icon?: any;
    onClick?: () => any;
    className?: any;
    loading?: boolean;
    size?: "sm" | "lg";
}

const SecondaryButton: React.FC<IProps> = ({
    text,
    icon,
    onClick,
    className,
    size = "sm",
    loading = false,
}) => {
    
    return (
        <>
            <Spin spinning={loading}>
                <Button
                    variant="secondary"
                    onClick={onClick}
                    className={className}
                    size={size}
                    disabled={loading}
                >
                    {icon && (
                        <>
                            {icon}
                        </>
                    )}
                    {text}
                </Button>
            </Spin>
        </>
    )
}

export default React.memo(SecondaryButton, (prev, next) => {
    return isEqual(prev.text, next.text) &&
        isEqual(prev.icon, next.icon) &&
        isEqual(prev.loading, next.loading) &&
        isEqual(prev.className, next.className);
})
