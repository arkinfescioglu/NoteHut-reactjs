import {useIntl} from 'react-intl';

let intl: any;

export function IntlGlobalProvider({children}: any) {
    intl = useIntl();
    // Keep the 'intl' service reference
    return children;
}

export const appIntl = () => {
    return intl;
};
