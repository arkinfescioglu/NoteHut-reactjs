import * as React from "react";
import {Grid} from "@mui/material";
import { Form, Input } from "antd";
import isEqual from "react-fast-compare";
import BaseLabel from "components/BaseLabel";

const PropsEqual = ((prevProps: any, nextProps: any) => {
    return isEqual(prevProps.text, nextProps.text) &&
        isEqual(prevProps.name, nextProps.name) &&
        isEqual(prevProps.rules, nextProps.rules) &&
        isEqual(prevProps.type, nextProps.type) &&
        isEqual(prevProps.initialValue, nextProps.initialValue) &&
        isEqual(prevProps.help, nextProps.help) &&
        isEqual(prevProps.formItemClassName, nextProps.formItemClassName) &&
        isEqual(prevProps.labelmd, nextProps.labelmd) &&
        isEqual(prevProps.labelxs, nextProps.labelxs) &&
        isEqual(prevProps.itemlxs, nextProps.itemlxs) &&
        isEqual(prevProps.itemmd, nextProps.itemmd);
});

interface InputWithLabelProps {
    text: any;
    name: string;
    rules?: any;
    type?: any;
    initialValue?: any;
    formItemClassName?: any;
    onChange?: any;
    labelmd?: any;
    labelxs?: any;
    itemlxs?: any;
    itemmd?: any;
    help?: any;
    labelStyle?: any
}

const InputWithLabel:React.FC<InputWithLabelProps> = ({
    text,
    name,
    rules,
    initialValue,
    formItemClassName,
    onChange = null,
    help = null,
    type = "text",
    labelmd = 3,
    labelxs=12,
    itemlxs=12,
    itemmd=12,
    labelStyle
}) => {

    return(
        <>
            <Grid container spacing={1}>
                <Grid item md={labelmd} lg={labelxs} xs={labelxs}>
                    <BaseLabel
                        text={text}
                        style={labelStyle}
                    />
                </Grid>
                <Grid item md={itemmd} xs={itemlxs}>
                    <Form.Item
                        name={name}
                        rules={rules}
                        initialValue={initialValue}
                        className={formItemClassName}
                        help={help}
                        validateStatus={!!help ? "warning" : ""}
                    >
                        <Input
                            type={type}
                            onChange={onChange}
                        />
                    </Form.Item>
                </Grid>
            </Grid>
        </>
    );
}

export default React.memo(InputWithLabel, PropsEqual);
