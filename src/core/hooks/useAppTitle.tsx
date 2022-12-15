import { useEffect } from "react";
import useTrans from "./useTrans";
import langFile from "shared/localization/locales/en_US.json";

interface IConfig {
    title: keyof typeof langFile | string;
    useTrans?: boolean;
}

export default function useAppTitle(config: IConfig = {
    title: "App",
    useTrans: true
}) {

    const { trans } = useTrans();

    useEffect(() => {

        if (config.useTrans) {
            setTitleWithTrans(config.title as any);
        } else {
            setTitle(config.title);
        }

    }, []);

    const setTitleWithTrans = (title: keyof typeof langFile) => {
        document.title = trans(title) as any;
    }

    const setTitle = (title: any) => {
        document.title = title;
    }

    return {
        setTitleWithTrans,
        setTitle
    }
}
