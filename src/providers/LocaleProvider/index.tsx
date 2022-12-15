import React, {useContext} from 'react';
import {IntlProvider} from 'react-intl';
import AppLocale from 'shared/localization';
import useApp from "../AppProvider/useApp";
import {IntlGlobalProvider} from "shared/helpers/utils";


const LocaleProvider = (props: any) => {
    const {locale} = useApp();
    const currentAppLocale = AppLocale[locale];

    return (
        <IntlProvider
            locale={currentAppLocale.locale}
            defaultLocale='fr'
            messages={currentAppLocale.messages}>
            <IntlGlobalProvider>{props.children}</IntlGlobalProvider>
        </IntlProvider>
    );
};

export default LocaleProvider;
