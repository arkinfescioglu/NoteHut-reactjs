import * as React from "react";
import {Fonts} from "shared/constants/AppEnums";
import isEqual from 'react-fast-compare';
import {Box} from "@mui/material";

interface LabelProps {
    text: string;
    style?: any
}

const PropsEqual = ((prevProps: any, nextProps: any) => {
    return isEqual(prevProps.text, nextProps.text) &&
    isEqual(prevProps.style, nextProps.style);
});

const BaseLabel: React.FC<LabelProps> = ({
    text,
    style
}) => {

    return (
        <>
            <Box
                fontWeight={Fonts.BOLD}
                style={style}
            >
                {text}
            </Box>
        </>
    );
}
export default React.memo(BaseLabel, PropsEqual);
