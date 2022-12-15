import { Form, Select } from "antd";
import * as React from "react";
import isEqual from 'react-fast-compare';
import {Grid} from "@mui/material";
import BaseLabel from "components/BaseLabel";

const RenderSelect = React.memo(({
    name,
    onSearch,
    initialValue,
    mode,
    onChange,
    onClear,
    data,
    selectLabel,
    formItemClassName,
    selector,
}: {
    name: any,
    onSearch: any,
    mode: any,
    onChange: any,
    onClear: any,
    data: any,
    selectLabel: any,
    selector: any;
    formItemClassName: any;
    initialValue: any;
}) => (
    <>
        <Form.Item
            name={name}
            initialValue={!!initialValue
                ? initialValue
                :
                (mode === "multiple" ? [] : null)
            }
            style={{
                margin: 0,
                marginBottom: "10px"
            }}
        >
            <Select
                allowClear={true}
                showSearch
                style={{ width: '100%' }}
                dropdownStyle={{
                    zIndex: 9999,
                }}
                placeholder="Seçiniz"
                optionFilterProp='children'
                filterOption={(input: any, option: any): any => option.children
                    .toLocaleUpperCase('tr-TR')
                    .indexOf(input.toLocaleUpperCase('tr-TR')) >= 0
                }
                onChange={onChange}
                onSearch={!!onSearch ? onSearch : null}
                mode={mode}
                onClear={!!onClear ? onClear : null}
            >
                {!!data &&
                    Array.isArray(data) &&
                    data.length > 0 &&
                    data.map((item: any, index: number) => (
                        <Select.Option
                            key={`${index}---${item[selector]}`}
                            value={item[selector]}
                        >
                            {typeof selectLabel === 'function'
                                ? selectLabel(item)
                                : item[selectLabel]
                            }
                        </Select.Option>
                    ))}
            </Select>
        </Form.Item>
    </>
), ((prevProps, nextProps) => {
    return isEqual(prevProps.data, nextProps.data) &&
        isEqual(prevProps.selectLabel, nextProps.selectLabel) &&
        isEqual(prevProps.name, nextProps.name) &&
        isEqual(prevProps.selector, nextProps.selector);
}));

interface SelectWithLabelProps {
    data: any,
    label?: any,
    value?: any,
    form?: any,
    loading?: any,
    selector?: any,
    selectLabel?: any,
    onSearch?: any | null,
    onChange?: any,
    onClear?: any,
    onFocus?: any | null,
    onBlur?: any | null,
    name: any | null,
    withLabel?: boolean | null,
    rules?: any,
    initialValue?: any,
    mode?: any,
    allowClear?: any,
    addonAfter?: any,
    darkMode?: boolean;
    xs1?: any;
    xs2?: any;
    labelmd?: any;
    labelxs?: any;
    itemlxs?: any;
    itemmd?: any;
}


const SelectWithLabel: React.FC<SelectWithLabelProps> = ({
    data,
    selector,
    onSearch,
    onChange,
    onFocus,
    onBlur,
    onClear,
    selectLabel,
    name,
    label,
    withLabel,
    rules,
    initialValue,
    value,
    loading,
    mode,
    allowClear,
    addonAfter,
    labelmd = 3,
    labelxs = 12,
    itemlxs = 9,
    itemmd = 12,
    darkMode = false,
}) => {

    return (
        <>
            <Grid
                container
                spacing={1}
            >
                <Grid item md={labelmd} xs={labelxs}>
                    <BaseLabel
                        text={label}
                    />
                </Grid>
                <Grid item md={itemmd} xs={itemlxs}>
                    <RenderSelect
                        data={data}
                        onChange={onChange}
                        onSearch={onSearch}
                        onClear={onClear}
                        mode={mode}
                        selectLabel={selectLabel}
                        selector={selector}
                        name={name}
                        initialValue={initialValue}
                        formItemClassName={""}
                    />
                </Grid>
            </Grid>
        </>
    );
}
export default React.memo(SelectWithLabel);
