import { useIntl } from "react-intl";
import EnLang from "shared/localization/entries/en-US";

export default function useTrans() {
    const { messages } = useIntl();
    return {
        trans: (message: keyof typeof EnLang.messages): any => {
            return !!messages?.[message] ? messages?.[message] : message;
        }
    }
}
